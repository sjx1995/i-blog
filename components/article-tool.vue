<!--
 * @Description: 文章工具栏
 * @Author: Sunly
 * @Date: 2023-09-11 06:20:19
-->
<script setup lang="ts">
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="article-tool">
    <Icon :name="icon" />
  </div>
</template>

<style lang="scss" scoped>
.article-tool {
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $footer_color;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: -20px;
    right: 0;
    left: 16px;
    display: block;
    border-top: 10px solid $footer_shadow_color;
    border-left: 20px solid $footer_shadow_color;
    border-bottom: 10px solid transparent;
    border-right: 20px solid transparent;
  }

  svg.icon {
    @include insetTipText;
    font-size: 48px;
  }

  &:hover {
    svg.icon {
      color: $tip_text_hover_color;
    }
  }
}
</style>
