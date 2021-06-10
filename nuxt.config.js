// robots follow / we want only prod to be indexed
// const robotsContent = process.env.ROBOTS_FOLLOW === 'follow' ? 'index,follow' : 'noindex';


// console.info('Building Application with following params', {
//   robotsContent,
// });

const robotsContent =
  process.env.ROBOTS_FOLLOW === 'follow' ? 'index,follow' : 'noindex';
const renderingMode = process.env.RENDERING_MODE || 'server';

export default {

  target: renderingMode,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Торт на замовлення в Харкові. Капкейки. Тістечка | Sweet bakery',
    htmlAttrs: {
      lang: 'uk'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Замовити торт в Харькові' },
      { hid: 'meta:robots', name: 'robots', content: robotsContent }
    ],
    link: [
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes:'16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes:'32x32' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', href: '/android-chrome-192x192.png', sizes:'192x192' },
      { rel: 'icon', type: 'image/png', href: '/android-chrome-512x512.png', sizes:'512x512' },
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
    '@/plugins/vue-scrollto',
    { src: '~/plugins/vue-stack-grid', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
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
