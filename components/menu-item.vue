<!--
 * @Description: 文章列表
 * @Author: Sunly
 * @Date: 2023-09-10 14:53:21
-->
<script setup lang="ts">
const router = useRouter();

withDefaults(
  defineProps<{
    title: string;
    url: string;
    desc?: string;
    dateTime: string;
  }>(),
  {
    title: "",
    url: "",
    desc: "",
    dateTime: "",
  }
);
</script>

<template>
  <div class="menu-item-wrapper">
    <div class="menu-item-shadow"></div>
    <div class="menu-item" @click="() => router.push({ path: url })">
      <div class="title">{{ title }}</div>
      <div class="desc">{{ desc }}</div>
      <div class="date-time">发布时间: {{ dateTime }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-item-wrapper {
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  width: 252px;
  min-height: 100px;
  margin: 16px 0 24px 16px;
  .menu-item-shadow {
    position: absolute;
    top: 12px;
    left: 12px;
    bottom: -12px;
    right: -12px;
    background-color: $content_color_level2;
  }
  .menu-item {
    position: relative;
    inset: 0;
    padding: 8px;
    color: #1f1f1f;
    transition: all 0.3s;
    transition-timing-function: cubic-bezier(0.22, 0.61, 0.36, 1);
    background-color: $content_color_level0;
    &:hover {
      color: #c41d7f;
      background-color: $content_color;
      top: 12px;
      left: 12px;
      bottom: -12px;
      right: -12px;
    }
    div {
      margin: 16px 0;
    }

    .title {
      font-size: 20px;
      font-weight: 500;
      margin-top: 4px;
    }
    .desc {
      font-size: 14px;
      line-height: 20px;
    }
    .date-time {
      font-size: 12px;
      text-align: right;
      margin-bottom: 4px;
    }
  }
}
</style>
