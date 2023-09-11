---
title: 搭建PVE服务器
description: 搭建家庭服务器，使用PVE做服务器虚拟环境，并安装OpenWRT软理由控制托管整个网络
dateTime: 2023-05-07 14:35
---
# 搭建PVE服务器

## 网络拓扑

![网络拓扑图](/imgs/网络拓扑图.jpg)

光猫桥接模式，软路由负责拨号上网，光猫通过物理网口ETH0与软路由连接

软路由通过虚拟网卡vETH与宿主机PVE和虚拟网桥vmbr0连接

其他设备通过AP模式的硬路由无线连接，硬路由通过ETH1与宿主机连接

**ETH1是管理网口**

## 准备

因为以后我希望内网网段是`192.168.10.xxx`，所以我们先将路由器设置为`192.168.10.1`，这样我们设置PVE的过程中，PVE会自动获取`192.168.10.xxx`网段

硬路由需要打开DHCP

![准备](/imgs/准备.jpg)

## 安装 PVE

使用Rufus将PVE系统（以DD模式）写入u盘

> [Rufus - 轻松创建 USB 启动盘](https://rufus.ie/zh/)

> [Downloads - Proxmox VE](https://pve.proxmox.com/wiki/Downloads)

U盘启动安装程序

## 网络设置

在`manaagement interface`可以看到管理网口(ETH1)的设备名，我这里显示`eno2`。即**ETH1 对应 eno2**

手动设置服务器的内网地址，牢记！我这里设置为`192.168.10.100`

然后等待安装就好，安装完成后会自动重启

此时的网络拓扑就变成了

![安装](/imgs/安装.jpg)

## 访问

安装完成后，在电脑浏览器中输入`https://192.168.10.100:8000`就可以访问到PVE管理界面

## PVE 换源

```bash
wget https://mirrors.ustc.edu.cn/proxmox/debian/proxmox-release-bullseye.gpg -O /etc/apt/trusted.gpg.d/proxmox-release-bullseye.gpg
echo "#deb https://enterprise.proxmox.com/debian/pve bullseye pve-enterprise" > /etc/apt/sources.list.d/pve-enterprise.list
echo "deb https://mirrors.ustc.edu.cn/proxmox/debian/pve bullseye pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
```

## Debian 换源

备份：

```bash
mv /etc/apt/sources.list /etc/apt/sources.list.bk
vi /etc/apt/sources.list
```

写入`sources.list`：

```text
deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian stable main contrib non-free
deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free
# deb http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free
```

## 更新

```bash
apt update
apt upgrade -y
```

## 识别网口

在PVE管理界面 - 系统 - 网络中，可以看到当前存在的网桥`vmbr0`，它连接了`eno2`

因为我是双网口的机器，所以另一个设备名叫`eno1`的接口对应的物理接口就是`ETH0`

如果是多网口，可以安装`ethtool`查看网口信息

```bash
apt install ethtool -y

ethtool -i eno1
```

根据管理界面和`ethtool`的信息，可以写出网口的对应关系：

| 物理网口 | 系统设备名 | 设备位置     |
| -------- | ---------- | ------------ |
| ETH0     | eno1       | 0000:c1:00.0 |
| ETH1     | eno2       | 0000:c1:00.1 |

## 开启硬件直通

```bash
vi /etc/default/grub
```

注释掉：

```text
GRUB_CMDLINE_LINUX_DEFAULT="quiet"
```

intel芯片添加：

```text
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```

amd芯片添加：

```text
GRUB_CMDLINE_LINUX_DEFAULT="quiet amd_iommu=on pcie_acs_override=downstream,multifunction"
```

更新：

```bash
update-grub
```

重启

## 安装OpenWRT

> 使用eSir的OpenWRT [esirplayground/AutoBuild-OpenWrt](https://github.com/esirplayground/AutoBuild-OpenWrt)

在PVE管理界面 - local - ISO镜像 - 上传镜像iso文件

创建虚拟机：
- 【操作系统】中选择刚才上传的镜像
- 【系统】中选择【SeaBIOS】
- 删除【磁盘】
- 【网络】中选择【VirtIO】

设置完成后先不要启动，使用终端登录

打开配置文件：

```bash
vi /etc/pve/qemu-server/100.conf
```

将`ide2`的`media=cdrom`改成`cache=unsafe`

### 添加网口

添加 - PCI设备

应该先添加wan口，我这边是除了管理网口的另一个网口——`ETH0`

软路由会将第一个设备（软路由设备名eth0）设置为默认lan口，第二个设备（软路由设备名eth1）设置为默认wan口

软路由设备名是按照添加顺序命名的

所以现在网口对应关系表：
| 外部名称 | 系统设备名 | 设备位置     | 软路由内设备名 | wan | lan |
| -------- | ---------- | ------------ | -------------- | --- | --- |
| ETH0     | eno1       | 0000:c1:00.0 | eth1           | ✅   |     |
| ETH1     | eno2       | 0000:c1:00.1 | eth0 桥接      |     | ✅   |

## 登录OpenWRT

启动OpenWRT，修改`/etc/config/network`，指定OpenWRT管理界面ip，我这里改为`192.168.10.1`

电脑直接连接管理网口`ETH1`，浏览器访问`192.168.10.1`就可以看到管理界面

在【接口】-【LAN】-【高级】打开【强制DHCP】

## 自动启动OpenWRT

因为现在网络中只有OpenWRT拥有DHCP功能，所以我们需要让OpenWRT自启动

在pve设置面板中，选择openwrt虚拟机-【选项】-【自启动】

## 设置Wan口拨号上网

将光猫改成【桥接】模式

OpenWRT管理面板中，设置【接口】-【WAN】-【PPPoE拨号上网】

