<!--
 * @Description: 博文渲染页
 * @Author: Sunly
 * @Date: 2023-09-10 11:33:28
-->
<script setup lang="ts">
import { useSkeleton } from "@/hooks/useSkeleton";

useSkeleton("titleCard");

const { page } = useContent();
console.log("🚀 ~ file: [...slug].vue:12 ~ page:", page);

const router = useRouter();

const mainEl = ref<HTMLDivElement | null>(null);
const { top } = useElementBounding(mainEl);
const showToTop = computed(() => top.value < -150);

const handleToTop = () => {
  window?.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <article class="prose article-main" ref="mainEl">
    <ArticleTool
      :top="top"
      :idx="1"
      icon="ep:back"
      @click="() => router.push({ path: '/' })"
    />
    <transition
      enter-active-class="animate__animated animate__bounceIn animate__faster"
      leave-active-class="animate__animated animate__bounceOut animate__faster"
    >
      <ArticleTool
        v-show="showToTop"
        :top="top"
        :idx="2"
        icon="ep:top"
        @click="handleToTop"
      />
    </transition>

    <ContentDoc class="markdown-body" />
  </article>
</template>

<style lang="scss">
@import "@/assets/markdown.css";

.article-main {
  position: relative;
  padding: 32px 64px;
  .article-tool {
    left: -16px;
    z-index: 20;
  }
  .markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 980px;
    margin: 0 auto;
    padding: 40px;
  }
}

@media (max-width: 767px) {
  .article-main {
    position: relative;
    padding: 8px 16px;
    .markdown-body {
      padding: 24px 32px;
    }
  }
}
</style>
