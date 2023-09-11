<!--
 * @Description: 博文渲染页
 * @Author: Sunly
 * @Date: 2023-09-10 11:33:28
-->
<script setup lang="ts">
// @ts-ignore
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

    <ContentDoc />
  </article>
</template>

<style lang="scss" scoped>
.article-main {
  position: relative;
  padding: 32px 64px;
  .article-tool {
    left: -16px;
    z-index: 20;
  }
}
</style>
