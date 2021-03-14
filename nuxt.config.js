export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sweet bakery',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    host: '0' // default: localhost
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontawesome',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  googleFonts: {
    families: {
      Lato: {
        wght: [300, 400, 700],
        ital: [400]
      },
      'Lobster': [400]
    }
  },
  fontawesome: {
    icons: {
      solid: true,
      brands:  true
    }
  }
}
