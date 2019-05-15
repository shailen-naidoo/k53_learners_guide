const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  mode: 'universal',

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
        href: 'https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
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
        })
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
  }
}
