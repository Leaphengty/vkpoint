import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import pkg from './package'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Gothic+A1|Roboto'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Germania+One'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css'
      }
    ],
    script: [
      {
        src: 'https://www.gstatic.com/firebasejs/live/3.0/firebase.js',
        type: 'text/javascript'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style/app.styl', '~/assets/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vuetify', '@/plugins/firebase'],
  router: {
    middleware: ['handle-auth']
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-universal-storage'
  ],
  storage: {
    vuex: {
      namespace: 'storage'
    },
    cookie: {
      prefix: '',
      options: {
        path: '/'
      }
    },
    localStorage: {
      prefix: ''
    },
    ignoreExceptions: false
  },
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
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
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
          exclude: /(node_modules)/
        })
      }
    }
  }
}
