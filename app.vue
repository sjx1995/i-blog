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
  <div>
    <main :class="[inMainPage ? 'mini' : 'full']">
      <h1>app layout</h1>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
main {
  margin-top: 10vh;
  background-color: skyblue;
  transition: all 1s;
}
main.mini {
  margin-left: 50vw;
  margin-right: 20vw;
  width: 30vw;
}
main.full {
  margin-left: 10vw;
  margin-right: 10vw;
  width: 80vw;
}
</style>
