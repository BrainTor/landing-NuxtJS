import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Nitro preset
  nitro: {
    preset: 'node-server'
  },

  runtimeConfig: {
    public: {
      NUXT_APP_BACK_URL: process.env.NUXT_APP_BACK_URL, 
      NUXT_APP_LINK:process.env.NUXT_APP_LINK
    }
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
        { property: 'og:image', content: `${process.env.NUXT_APP_LINK}social.jpg` },
        {name:'google-site-verification', content:'uGx2TURdx1xPjcRkqzuRNCdsNXk6NFFPu1b684gjW9c'},
        {name:'yandex-verification', content:'7dcc348e610c184e'},
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
            "url": `${process.env.NUXT_APP_LINK}`,
            "logo": `${process.env.NUXT_APP_LINK}logo.png`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+7 (960) 459-34-45",
              "contactType": "Customer Service",
              "areaServed": "RU",
              "availableLanguage": ["Russian"],
              "email": "m.yacenko@gmail.com"
            }
          })
        },
        {
          hid:'custom-script',
          innerHTML:
          `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(98551603, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
          `,
          type:'text/javascript'
        }
      ],
      noscript:[
        {
          innerHTML:'<div><img src="https://mc.yandex.ru/watch/98446584" style="position:absolute; left:-9999px;" alt="" /></div>'
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
  build: {
    
  },

  compatibilityDate: '2024-09-22',
})