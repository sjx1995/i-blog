<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-09-09 17:21:12
-->
<script setup lang="ts">
const route = useRoute();
const inMainPage = computed(() => route.fullPath === "/");
</script>

<template>
  <CodeBg />
  <main class="content" :class="[inMainPage ? 'mini' : 'full']" ref="mainEl">
    <ISkeleton>
      <NuxtPage />
    </ISkeleton>
    <div class="outer-right-border"></div>
    <div class="outer-bottom-border"></div>
    <div class="footer-shadow"></div>
    <div class="inner-top-border"></div>
    <div class="inner-left-border"></div>
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
    <IFooter class="footer" />
  </main>
</template>

<style lang="scss" scoped>
.content,
.border-top,
.border-right,
.border-bottom,
.border-left,
.inner-left-border,
.inner-left-border::after,
.inner-top-border,
.inner-top-border::after,
.outer-bottom-border,
.outer-bottom-border::before,
.outer-bottom-border::after,
.outer-right-border,
.outer-right-border::before,
.outer-right-border::after {
  transition: all 0.3s;
}

.content {
  position: relative;
  padding-top: 4px;
  padding-bottom: 240px;
  background-color: $content_color;
  margin-bottom: 108px;
  &.full {
    margin-left: calc((100vw - min(80vw, 1200px)) / 2);
    width: 80vw;
    max-width: 1200px;
    margin-top: 144px;

    @media screen and (max-width: 800px) {
      margin-left: 16px;
      width: calc(100vw - 16px * 2);
      max-width: calc(100vw - 16px * 2);
      margin-bottom: 0;
    }
  }
  &.mini {
    width: 340px;
    max-width: 340px;
    margin-top: 164px;
    margin-left: 60vw;
    @media screen and (max-width: 1000px) {
      margin-left: 50vw;
    }
    @media screen and (max-width: 800px) {
      margin-left: calc((100vw - 340px) / 2 + 24px);
    }
  }
}

.content {
  // border
  .border-top {
    position: absolute;
    background-color: $border_color;
    height: 16px;
    top: -40px;
    left: -48px;
    right: 32px;
  }
  .border-right {
    position: absolute;
    background-color: $border_color;
    width: 16px;
    top: -40px;
    bottom: 32px;
    right: 32px;
  }
  .border-bottom {
    position: absolute;
    background-color: $border_color;
    height: 16px;
    left: -48px;
    right: 32px;
    bottom: 32px;
  }
  .border-left {
    position: absolute;
    background-color: $border_color;
    width: 16px;
    left: -48px;
    top: -40px;
    bottom: 32px;
  }
  .inner-top-border {
    position: absolute;
    top: -24px;
    left: 0;
    height: 24px;
    right: 32px;
    background-color: $content_color_level2;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -32px;
      border-top: 12px solid $content_color_level2;
      border-right: 16px solid $content_color_level2;
      border-bottom: 12px solid transparent;
      border-left: 16px solid transparent;
    }
  }
  .inner-left-border {
    position: absolute;
    top: 0;
    left: -32px;
    bottom: 32px;
    width: 32px;
    background-color: $content_color_level1;
    &::after {
      content: "";
      position: absolute;
      top: -24px;
      left: 0;
      border-top: 12px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 12px solid $content_color_level1;
      border-left: 16px solid $content_color_level1;
    }
  }
  .outer-right-border {
    position: absolute;
    top: 0;
    right: 0px;
    bottom: 32px;
    width: 32px;
    background-color: $border_color_level1;
    &::before {
      content: "";
      position: absolute;
      top: -40px;
      left: 0;
      border-top: 20px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 20px solid $border_color_level1;
      border-left: 16px solid $border_color_level1;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -32px;
      left: 0;
      border-top: 16px solid $border_color_level1;
      border-right: 16px solid $border_color_level1;
      border-bottom: 16px solid transparent;
      border-left: 16px solid transparent;
    }
  }
  .outer-bottom-border {
    position: absolute;
    left: 0;
    right: 32px;
    bottom: 0;
    height: 32px;
    background-color: $border_color_level2;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -48px;
      border-top: 16px solid $border_color_level2;
      border-right: 24px solid $border_color_level2;
      border-bottom: 16px solid transparent;
      border-left: 24px solid transparent;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: -32px;
      border-top: 16px solid transparent;
      border-right: 16px solid transparent;
      border-bottom: 16px solid $border_color_level2;
      border-left: 16px solid $border_color_level2;
    }
  }

  // footer
  .footer {
    position: absolute;
    background-color: $footer_color;
    right: 0;
    bottom: 96px;
    width: 200px;
    height: 88px;
  }
  .footer-shadow {
    position: absolute;
    background-color: $footer_shadow_color;
    right: 0;
    bottom: 72px;
    width: 200px;
    height: 24px;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      left: 0;
      border: 12px solid $footer_shadow_color;
      border-left-color: $content_color;
      border-bottom-color: $content_color;
    }
  }
}

.content.full {
  .border-top {
    top: -16px;
    left: -16px;
    right: -16px;
  }
  .border-left {
    top: -16px;
    left: -16px;
    bottom: -16px;
  }
  .border-right {
    top: -16px;
    right: -16px;
    bottom: -16px;
  }
  .border-bottom {
    left: -16px;
    bottom: -16px;
    right: -16px;
  }
  .inner-left-border {
    width: 16px;
    top: 0;
    bottom: 0;
    left: -16px;
    &::after {
      top: -16px;
      left: 0;
      border-width: 8px;
    }
  }
  .inner-top-border {
    top: -16px;
    left: 0;
    right: 0;
    height: 16px;
    &::after {
      top: 0;
      left: -16px;
      border-width: 8px;
    }
  }
  .outer-bottom-border {
    height: 16px;
    bottom: -16px;
    left: 0;
    right: 0;
    &::before {
      top: 0;
      left: -16px;
      border-width: 8px;
    }
    &::after {
      right: -16px;
      top: 0;
      border-width: 8px;
    }
  }
  .outer-right-border {
    width: 16px;
    top: 0;
    bottom: 0;
    right: -16px;
    &::before {
      top: -16px;
      left: 0;
      border-width: 8px;
    }
    &::after {
      bottom: -16px;
      left: 0px;
      border-width: 8px;
    }
  }
}
</style>
