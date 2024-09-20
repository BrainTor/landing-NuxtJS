// plugins/fontawesome.ts
import { defineNuxtPlugin } from '#app'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Импортируйте необходимые иконки
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
// Импортируйте стили FontAwesome
import '@fortawesome/fontawesome-svg-core/styles.css'

// Отключаем автоматическое добавление CSS, так как мы делаем это вручную
config.autoAddCss = false

// Добавьте иконки в библиотеку
library.add(fas, far, fab)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})
