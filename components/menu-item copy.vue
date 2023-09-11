<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-09-11 02:51:02
-->
<!--
 * @Description: 文章列表
 * @Author: Sunly
 * @Date: 2023-09-10 14:53:21
-->
<script setup lang="ts">
import { getRandom } from "@/utils/index";
withDefaults(
  defineProps<{
    title: string;
    url: string;
    desc?: string;
  }>(),
  {
    title: "",
    url: "",
    desc: "",
  }
);

const border1Style = {
  transform: `rotate(${getRandom(3)}deg)`,
};
const border2Style = {
  transform: `rotate(${getRandom(-2)}deg)`,
};
</script>

<template>
  <div class="menu-item">
    <div class="border-1" :style="border1Style"></div>
    <div class="border-2" :style="border2Style"></div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item {
  box-sizing: border-box;
  width: 260px;
  height: 100px;
  padding: 12px;
  margin: 16px 0 0 16px;
  color: #666;
  transition: all 0.3s;
  cursor: pointer;
  position: relative;
  .border-1,
  .border-2 {
    position: absolute;
    border: 1px solid #666;
    inset: 4px;
    transition: all 0.3s;
  }
  &:hover {
    color: #000;
    .border-1,
    .border-2 {
      border-color: #000;
      border-width: 1.5px;
      transform: rotate(0) !important;
    }
  }
}
</style>
