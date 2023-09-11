/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-09-09 17:21:12
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "nuxt-icon", "@vueuse/nuxt"],
  devtools: { enabled: true },
  css: [
    "@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Bold/result.css",
    "@/assets/main.css",
    "@/node_modules/normalize.css/normalize.css",
    "@/node_modules/animate.css/animate.min.css",
  ],
  experimental: {
    /**
     * see: https://v3.nuxtjs.org/api/configuration/nuxt.config#inlinessrstyles
     */
    inlineSSRStyles: false,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/variable.scss" as *;',
        },
      },
    },
    esbuild: {
      drop: ["console", "debugger"],
    },
  },
});
