// robots follow / we want only prod to be indexed
const robotsContent = process.env.ROBOTS_FOLLOW === 'follow' ? 'index,follow' : 'noindex';


console.info('Building Application with following params', {
  robotsContent,
});


export default {

  env: {
    robots: robotsContent === 'index,follow'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sweet bakery',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'meta:robots', name: 'robots', content: robotsContent }
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
    '@/plugins/vue-snap',
    { src: '~/plugins/vue-stack-grid', mode: 'client' }
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
    '@nuxtjs/gtm'
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
  },
  gtm: {
    id: 'GTM-NZMWTP5'
  }
}
