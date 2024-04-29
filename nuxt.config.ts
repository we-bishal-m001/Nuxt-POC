// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  experimental: {
    typedPages: true,
    componentIslands: true,
  },

  runtimeConfig: {
    public: {
      productsApiBaseUrl: "",
    },
  },

  modules: ["@vueuse/nuxt", "@nuxt/ui", "@pinia/nuxt"],
});
