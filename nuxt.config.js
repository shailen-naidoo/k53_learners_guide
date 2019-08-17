const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  mode: 'universal',
  env: {
    API_KEY: process.env.API_KEY,
    APP_ID: process.env.APP_ID,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    MESSAGING_ID: process.env.MESSAGING_ID,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'png',
        href: '/icon.png',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700|Material+Icons',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.min.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.8.2/css/all.css',
        integrity: 'sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff', },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.styl',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/staticData',
    { src: '@/plugins/firebase', ssr: false, },
    { src: '@/plugins/init', ssr: false, },
    { src: '@plugins/offline', ssr: false, },
    { src: '@/plugins/scroll', ssr: false, },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', {
      id: 'UA-130574703-2',
    }, ],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'networkFirst',
        method: 'GET',
        cacheableResponse: {
          statuses: [
            0,
            200,
          ],
        },
      },
      {
        urlPattern: 'https://use.fontawesome.com/.*',
        handler: 'networkFirst',
        method: 'GET',
        cacheableResponse: {
          statuses: [
            0,
            200,
          ],
        },
      },
      {
        urlPattern: '/images/.*',
        handler: 'cacheFirst',
        method: 'GET',
        cacheableResponse: {
          statuses: [
            0,
            200,
          ],
        },
      },
    ],
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vuetify/lib',
    ],
    plugins: [
      new VuetifyLoaderPlugin(),
    ],
    loaders: {
      stylus: {
        import: [
          '~assets/style/variables.styl',
        ],
      },
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  manifest: {
    name: 'K53 Learners Guide',
    short_name: 'K53',
    start_url: '/',
  },
  generate: {
    routes: [
      '/courses/road-signs/topic/regulatory-signs',
    ],
  },
};
