import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Nitro preset
  nitro: {
    preset: 'node-server', // Убедитесь, что выбран правильный режим работы Nitro
    
  },
 
  // Global page headers
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { property: 'og:image', content: `${process.env.VUE_APP_LINK}social.jpg` },
        { name: 'robots', content: 'index, follow' }
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
          })
        }
      ]
    }
  },

  // Global CSS
  css: ['~/assets/global.css'],

  // Plugins to run before rendering page
  plugins: ['~/plugins/fontawesome.js'],

  // Auto import components
  components: true,

  // Modules с конфигурацией для nuxt-simple-sitemap
  modules: [
    ['nuxt-simple-sitemap', {
      siteUrl: 'https://silver-tech.ru',
      gzip: true,
      routes: [
        '/code',
        '/study',
        '/games/calc',
        '/games/cross',
        '/games/find_tres',
        '/games/ham'
      ]
    }]
  ],

  // Build Configuration
  build: {},
})
