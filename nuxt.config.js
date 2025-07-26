import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,

  head: {
    titleTemplate: '%s - Nathaniel Sanchez',
    title: 'QR Code Scanner',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: [
    { src: '~/plugins/html5-qrcode.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  axios: {
    baseURL: '/', // Change this if using a specific API
  },

  auth: {
    redirect: {
      login: '/auth/signin/',
      logout: '/auth/signin/',
      callback: '/auth/callback/',
      home: '/',
    },
    strategies: {
      google: {
        clientId: '43324794913-7529qhs598pubk3cunpale2tdkkk1jhl.apps.googleusercontent.com',
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://accounts.google.com/o/oauth2/auth',
          userinfo: 'https://www.googleapis.com/oauth2/v3/userinfo',
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          maxAge: 1800,
        },
        responseType: 'token id_token',
        scope: ['openid', 'profile', 'email'],
        redirectUri: process.env.REDIRECT_URI || 'http://localhost:3000/auth/callback/',
        codeChallengeMethod: '',
      },
      discord: {
        scheme: 'oauth2',
        endpoints: {
          authorization: 'https://discord.com/api/oauth2/authorize',
          userInfo: 'https://discord.com/api/users/@me',
        },
        scope: ['identify', 'email'],
        responseType: 'token',
        token: {
          property: 'access_token',
          type: 'Bearer',
        },
        clientId: '1398649385901883534',
        redirectUri: 'http://localhost:3000/auth/discord/callback',
      }
    }
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  build: {}
}
