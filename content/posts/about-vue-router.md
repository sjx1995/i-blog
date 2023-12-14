---
title: vue-router详解
description: 关于vue-router的方方面面
tag: vue vue-router
dateTime: 2023-09-12T22:55:24.398Z
sitemap:
  lastmod: 2023-09-12T22:55:24.398Z
  updatePeriod: monthly
head:
  meta:
    - name: 'keywords'
      content: 'vue vue-router'
    - name: 'author'
      content: 'sunly(https://github.com/sjx1995)'
    - name: 'copyright'
      content: '© 2023 Sunly'
---
## 什么是 vue-router

vue-router是vue.js的官方路由，允许在vue应用中构建单页面应用，提供了路由配置和导航功能

## vue-router 有哪些功能

- **路由映射**：将url映射到对应的vue组件
- **嵌套路由映射**：将子路由映射到子组件，实现复杂的页面嵌套结构
- **动态路由**：可以动态生成路由，传递信息
- **模块化路由配置**：可以将路由配置拆分为多个模块，分别引入
- **路由守卫**：有全局导航守卫和路由级别的导航守卫，可以在路由跳转前后进行操作
- **动画**：可以为组件间跳转添加动画
- **路由模式**：支持**hash模式**和**history模式**
- **滚动行为**：页面切换时可以自定义滚动位置
- **url编码**：自动处理url编码

## 前端路由 vs 后端路由

### 前端路由

前端路由是SPA应用中的路由方式，页面跳转和后端无关，由前端根据url显示页面

#### 优点

- **跳转迅速，用户体验好**：页面切换由前端完成，后端只提供数据，所以跳转速度快
- **服务器压力小**：服务器只提供API接口所需的数据
- **灵活性**：前端开发者可以实现复杂的页面和动画

#### 缺点

- **SEO差**：因为内容都是Javascript生成的，搜索引擎爬虫可能获取不到内容
- **初始加载时间长**：用户第一次打开时需要加载更多的资源，所以白屏时间较长

### 后端路由

切换不同页面时，浏览器向服务器发送请求，服务器会拼接好html并返回给浏览器

#### 优点

- **SEO**：搜索引擎可以直接拿到选然后的页面
- **安全性**：用户的每一次跳转都在服务器完成，可以更安全的控制页面展示
- **兼容性**：客户端即使不支持Javascript也能实现某些功能

#### 缺点

- **速度慢，体验差**：每次页面跳转都要向后端发送请求，如果网速慢用户体验很差
- **服务端压力大**：如果项目比较大，浏览器压力会比较大

## 路由模式

前端路由的本质是**监听URL变化，拦截并匹配路由规则，在不刷新的情况下显示对应页面**

### hash模式

**hash模式**是利用浏览器url中改变**hash不会向服务器发送请求**的特点，只有`#`之前的真实路径才会被发送到服务端

前端把路由路径**使用`#`拼接在真实url后面**，通过监听 **hashchange** 事件来感知hash的变化，触发页面更新

**hash值的改变在浏览器历史中添加一条记录**，所以方便的控制前进后退

hash模式中，**服务器只负责应用的初始html和静态资源**

可以通过 **location.hash** 修改hash值，触发页面更新

### history模式

**history**是HTML5新增的API，它允许开发者**在不重载页面的情况下操作浏览器的历史记录**

history模式比hash模式更加美观

**history模式需要后端配合**：但是浏览器在刷新时会将当前的url发送到后端，但是后端没有对应的页面就会出现404，**所以服务器需要设置总是返回index.html（但对于资源文件需要正确返回）**，然后由前端再判断当前的路径

通过调用 **history.pushState()** 和 **history.replaceState()** 来修改url记录，**这两个方法修改url不会引起页面刷新**

通过监听 **popstate** 事件来感知history的变化，加载对应的页面

```js
history.replaceState({}, null, '/a'); // 替换历史记录
history.pushState({}, null, '/a'); // 添加新的历史记录
history.back(); // 返回
history.forward(); // 前进
history.go(-2); // 后退2次
```

## router-link 与 router-view

- `<router-link />`：创建链接，本质上是个`a`标签，可以让vue-router在不重载页面前提下修改url
- `<router-view />`：显示与url对应的组件

## route 和 router

### route

**route是当前路由信息对象**，获取与当前路由有关的信息，是**只读**的，可以通过`watch`监听路由属性的变化

route对象的属性：
- fullpath: 当前路由完整路径，包含hash和query
- hash：当前路由hash
- matched：当前路由的所有嵌套路径
- meta：路由附加信息
- name：路由名称
- params：动态路由中匹配的片段，是个对象
- path：当前路由路径，不包括hash和query
- query：当前路径的query，是个对象

### router

**router是vue-router的实例对象**，是**全局路由对象**，可以在router中获取整个路由文件或者使用路由对象提供的方法

router的实例对象接收routes作为配置对象，生成路由对象

## 动态路由

当w我们需要将某种**模式匹配的所有url**映射到**同一个组件时**，就需要**动态路由**

动态路由中包含动态参数，通过`:`来表示，当一个路由被匹配时，它的`params`的值在组件中以`$route.params`暴露出来

```js
// 路由表
const routes = [{ path: '/users/:id', component: User}]

// 访问/user/123时命中
// 在User组件中使用$route.params.id获取到值
const User = {
	template: `<div>{{ $route.params.id }}</div>`
}
```

## 动态添加删除路由

- [router.addRoute()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-addRoute)：动态添加路由
- [router.removeRoute()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-removeRoute): 动态删除路由

这两个方法只是修改了路由表，如果需要导航，应该手动调用[router.push()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-push)或者[router.replace](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-replace)

> `router.push()`和`router.replace()`都是异步的，可是使用await来确保路由已经完成

## 查看现有路由

- [router.hasRoute()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-hasRoute): 传入一个路由名称，检查路由是否存在
- [router.getRoutes()](https://router.vuejs.org/zh/api/interfaces/Router.html#Methods-getRoutes): 获取所有路由的数组

## 路由传参

### params传参

- **只能使用命名路由**（通过params属性）传值
- **参数不显示**在url上
- 浏览器强制刷新会**丢失参数**

```js
// 传递参数
this.$router.push({
	name: "user",
	params: {
		id: "123"
	}
})

// 接收参数
const id = this.$route.params.id
```

### query传参

- 可以用命名路由，也可以直接path传参
- **传递的参数会显示在url上**
- 页面**刷新不会丢失参数**

```js
// 通过命名路由传参
this.$router.push({
	name: "user",
	query: {
		id: "123"
	}
})

// 通过path传参
this.$router.push("/user?id=123")

// 接收参数
const id = this.$route.query
```

## keep-alive

`<keep-alive/>`可以让组件在切换过程中将状态保存在内存中，防止重复渲染DOM

和`<transition/>`类似，都是**抽象组件**——组件自身不会渲染为DOM元素，也不会出现在组件的父组件链中

`<keep-alive/>`接收的props属性：
- `include`：字符串或正则。只有组件名匹配的组件才会**被缓存**
- `exclude`：字符串或正则。组件名匹配的组件**不会被缓存**
- `max`:：数值类型。最多可以缓存的组件实例数

在**不缓存**组件实例时，每次切换都会**重新执行`render`**，**执行整个生命周期**，会消耗大量性能

对于**缓存**了的组件实例，只在第一次进入路由时执行`render`，来回切换不会重新执行生命周期，而且可以缓存组件数据

**动态路由组件只能缓存一份**，而且只有第一个被缓存的组件完整的生命周期，后面的只会触发`activated`和`deactivated`

### 生命周期

缓存的组件会新增两个生命周期钩子：
- **activated**：当被`<keep-alive/>`包裹的组件被插入到DOM中调用
- **deactivated**：当被`<keep-alive/>`包裹的组件被从DOM中移除时调用

#### keep-alive 组件的钩子函数顺序

首次进入组件：
- beforeRouteEnter
- beforeCreate
- created
- beforeMount
- beforeRouteEnter的next回调
- mounted
- activated

离开组件：
- beforeRouteLeave
- deactivated

再次进入组件：
- beforeRouteEnter
- activated

### 删除 keep-alive 中的缓存

```js
// foo.vue
<script>
export default {
	methods: {
		removeCacheRoute (fullPath) {
			const cache = this.$refs.router
		}
	}
}
</script>
```

## 路由守卫

**路由守卫可以通过跳转或取消的方式控制导航**，路由守卫分为：**全局路由守卫**、**独享路由守卫**、**组件路由守卫**

简单说路由守卫就是**路由跳转过程中的一些生命周期钩子函数**，我们可以通过这些钩子来控制导航

但凡参数中有next钩子，都 **必须调用`next()`** 才能继续执行下一个钩子，否则路由跳转会暂停

### 全局路由守卫

#### 全局前置守卫 beforeEach()

在**路由跳转前触发**，主要用于登录验证、权限判断

前置守卫可以理解为一个路由拦截器，所有路由的跳转都会被前置守卫拦截

#### 全局解析守卫 beforeResolve()

每次导航都会触发，触发时机在 **全局前置守卫 beforeEach()** 和 **beforeRouteEnter()** 之后，在 **全局后置守卫 afterEach()** 之前

`beforeResolve()`是获取数据的理想位置

#### 全局后置守卫 afterEach()

和`beforeEach()`相反，**在路由完成后触发**

全局后置守卫主要用于分析、更改页面标题等

### 独享路由守卫

#### beforeEnter()

在路由配置上定义，**在进入路由时触发**，**不会在params、query、hash改变时触发**

```js
const routes = [{
	path: '/user',
	beforeEnter (to, from, next) => {
		next()
	}
}]
```

### 组件路由守卫

组件路由守卫类似于组件的生命周期

#### beforeRouteEnter()

**在路由被验证前调用**，此时获取不到组件的this，因为此时**组件还没有被创建**

第三个参数`next`，接收一个回调函数，**回调的执行时机在`beforeMount`之后**，回调接收一个参数`vm`，即组件实例

> 这是唯一支持向`next`传递回调的守卫

#### beforeRouteUpdate()

**在路由变化时调用**，可以用来检测路有变化，主要是当组件被复用且路由变化时被调用

比如对于动态路由`/user/:id`，在`/user/1`和`/user/2`之间跳转时被调用

#### beforeRouteLeave()

**在导航离开前调用**，此时**组件还没有被拆卸**，可以通过this访问组件实例

### 页面加载时守卫触发顺序

- 全局前置守卫 beforeEach()
- beforeEnter()
- beforeRouteEnter()
- 全局解析守卫 beforeResolve()
- 全局后置守卫 afterEach()
- beforeCreated
- created
- beforeMount
- beforeRouteEnter()的next回调
- mounted

### 路由切换时守卫触发顺序

从组件A跳转组件B：
- A组件的beforeRouteLeave()
- 全局前置守卫 beforeEach()
- B组件的beforeEnter()
- B组件的beforeRouteEnter()
- 全局解析守卫 beforeResolve()
- 全局后置守卫 afterEach()
- B组件的beforeMount
- B组件的beforeRouteEnter()的next回调
- A组件的beforeDestory
- A组件的destoyed
- B组件的mounted
