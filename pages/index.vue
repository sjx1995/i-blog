<!--
 * @Description: 
 * @Author: Sunly
 * @Date: 2023-09-09 17:37:41
-->
<script setup lang="ts">
const router = useRouter();
const handleToPost = (path?: string) => {
  path && router.push({ path });
};
</script>

<template>
  <h1>hello nuxt</h1>
  <ContentList path="/posts" :query="{ only: ['title', '_path'] }">
    <template v-slot="{ list }">
      <div
        v-for="item of list"
        :key="item._path"
        @click="handleToPost(item._path)"
      >
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </ContentList>
</template>
