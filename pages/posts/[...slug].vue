<!--
 * @Description: 博文渲染页
 * @Author: Sunly
 * @Date: 2023-09-10 11:33:28
-->
<script setup lang="ts">
// @ts-ignore
const router = useRouter();
const handleToHome = () => {
  router.push({ path: "/" });
};
</script>

<template>
  <main>
    <button @click="handleToHome">返回</button>
    <article class="prose">
      <ContentDoc />
    </article>
  </main>
</template>
