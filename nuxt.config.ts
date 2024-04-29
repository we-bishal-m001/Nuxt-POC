// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  typescript: {
    strict: true,
  },

  experimental: {
    typedPages: true,
    componentIslands: true,
  },

  routeRules: {
    "/": {
      redirect: "/home",
    },
  },

  runtimeConfig: {
    public: {
      productsApiBaseUrl: "",
    },
  },

  modules: ["@vueuse/nuxt", "@nuxt/ui", "@pinia/nuxt", "@nuxt/image"],
});
