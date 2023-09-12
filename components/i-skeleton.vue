<!--
 * @Description: 骨架屏组件
 * @Author: Sunly
 * @Date: 2023-09-12 09:38:02
-->
<script setup lang="ts">
import { loading, skeletonType } from "@/hooks/useSkeleton";
</script>

<template>
  <div v-show="loading" class="skeleton-container">
    <template v-if="skeletonType === 'article'">
      <div v-for="i of 20" :Data.tey="i" class="skeleton article"></div>
    </template>
    <template v-else-if="skeletonType === 'titleCard'">
      <div v-for="i of 5" :key="i" class="skeleton title-card"></div>
    </template>
  </div>

  <div v-show="!loading">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.skeleton {
  margin: 16px 64px 24px 16px;
  background-color: $content_color_level1;
  background-image: linear-gradient(
    90deg,
    rgba($content_color_light, 0),
    rgba($content_color_light, 0.5),
    rgba($content_color_light, 0)
  );
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: shine 2s ease infinite;

  &.title-card {
    height: 140px;
  }
  &.article {
    height: 48px;
    border-radius: 48px;
    &:first-child {
      width: 20%;
    }
    @for $i from 2 through 20 {
      $width: #{random(
          $limit: 25,
        ) +
        50}+
        "%";
      &:nth-child(#{$i}) {
        width: $width;
      }
    }
  }
}

@keyframes shine {
  to {
    background-position: right -40px top 0;
  }
}
</style>
