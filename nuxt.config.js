
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  nitro: {
    preset: 'node-server' // Убедитесь, что выбран правильный режим работы Nitro
  },
  head: {
    title: 'forntend-ssr',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property:'og:image',content:`${process.env.VUE_APP_LINK}social.jpg` },
      {name:'robots',content:'index, follow'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Silver-Tech",
          "url": `${process.env.VUE_APP_LINK}`,
          "logo": `${process.env.VUE_APP_LINK}logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+7 (960) 459-34-45",
            "contactType": "Customer Service",
            "areaServed": "RU",
            "availableLanguage": ["Russian"],
            "email": "m.yacenko@gmail.com"
          }
        }),
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
   '~/assets/global.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://silver-tech.ru', 
    gzip: true, // Сжатие файла sitemap
    routes: [
      '/code', 
      '/study', 
      '/games/calc',
      '/games/cross',
      '/games/find_tres',
      '/games/ham'
    ],
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  server: {
    port: 5400, // по умолчанию: 3000
    host: '127.0.0.1' // по умолчанию: 'localhost'
  },
  ssr:true 
}
