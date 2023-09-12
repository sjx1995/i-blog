<!--
 * @Description: 主页
 * @Author: Sunly
 * @Date: 2023-09-09 17:37:41
-->
<script setup lang="ts">
import { useSkeleton } from "@/hooks/useSkeleton";
useSkeleton("article");
</script>

<template>
  <ContentList
    path="/posts"
    :query="{ only: ['title', '_path', 'description', 'dateTime'] }"
  >
    <template v-slot="{ list }">
      <MenuItem
        v-for="item of list"
        :key="item._path"
        :title="item.title"
        :desc="item.description"
        :dateTime="item.dateTime"
        :url="item._path"
      />
    </template>
  </ContentList>
</template>
