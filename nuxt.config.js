import colors from "vuetify/es5/util/colors";

export default {
  routes: [
    {
      path: "/dashboard/overview/:id",
      component: "~/pages/dashboard/overview/_id.vue",
    },
  ],
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Events",
    title: "Events",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/png", href: "/" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/style/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "@/plugins/axios" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "nuxt-i18n",
  ],
  axios: {
    // http: process.env.NODE_ENV === "development",
    // baseURL: "https://api.vyahealthcare.sa/api/v1/",
    // imgURL: "https://api.vyahealthcare.sa/",
    baseURL: "https://events.cat-sw.com/api/",
    imgURL: "https://events.cat-sw.com/api/",
    // proxy: true
  },
  // i18n: {
  //   // parsePages: false,
  //   locales: [
  //     { code: "en", iso: "en-US", file: "en.js" },
  //     { code: "ar", iso: "ar-EG", file: "ar.js" },
  //   ],
  //   defaultLocale: "en",
  //   strategy: "prefix",
  //   lazy: true,
  //   langDir: "locales/",
  //   vueI18n: {
  //     fallbackLocale: "en",
  //   },
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/style/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
