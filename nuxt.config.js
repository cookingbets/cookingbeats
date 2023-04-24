const PRIMARY_HOSTS = `https://www.mercadolibre.com/`;
require('dotenv').config();
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "cookingbeats",
    render: {
      csp: {
        reportOnly: true,
        hashAlgorithm: "sha256",
        policies: {
          "default-src": ["'self'"],
          "img-src": ["https:", "*.google-analytics.com"],
          "worker-src": ["'self'", `blob:`, PRIMARY_HOSTS, "*.logrocket.io"],
          "style-src": ["'self'", "'unsafe-inline'", PRIMARY_HOSTS],
          "script-src": [
            "'self'",
            "'unsafe-inline'",
            PRIMARY_HOSTS,
            "sentry.io",
            "*.sentry-cdn.com",
            "*.google-analytics.com",
            "*.logrocket.io",
          ],
          "connect-src": [PRIMARY_HOSTS, "sentry.io", "*.google-analytics.com"],
          "form-action": ["'self'"],
          "frame-ancestors": ["'self'"],
          "object-src": ["'self'"],
          "base-uri": [PRIMARY_HOSTS],
          "report-uri": [
            `https://sentry.io/api/<project>/security/?sentry_key=<key>`,
          ],
        },
      },
    },

    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "main.css" },
      { rel: "stylesheet", type: "text/css", href: "https://cdn.jsdelivr.net/npm/@braid/vue-formulate@2.5.3/dist/snow.min.css" },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Icons",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Icons+Sharp",
      },
      {
        rel: "stylesheet",
        href: `https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css`,
      },
      {
        
        rel: "stylesheet",
        href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript",
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript",
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript",
      },
      {
        src: "https://sdk.mercadopago.com/js/v1",
        type: "text/javascript",
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: "~/plugins/vue-plyr", mode: "client" },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    {src: '@braid/vue-formulate/nuxt'}
    //'vue-formulate-currency'
  ],

  styleResources:{
    scss: ['node_modules/@braid/vue-formulate/themes/snow/snow.scss'],
    css: ['~/assets/main.css']
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "nuxt-material-design-icons",
    "nuxt-helmet",
    "@dansmaculotte/nuxt-security",
    ["@nuxtjs/vuetify"],
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'nuxt-vue-select',
  ],

  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      // default theme is light mode
      dark: true,
    },
  },

  formulate: {
    configPath: '~/formulate.config.js',
  },

  axios: {
    baseURL: "http://89.116.214.100:3000/",
  },
  target: "static",
  router:{
    base: '/'
  },
  proxy: {
    "/api/": {
      target: "serve",
      pathRewrite: { "^/api/": "" },
      changeOrigin: true,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  server: {
    port: process.env.PORT,
  },
};
