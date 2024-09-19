import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Импортируйте иконки, которые вам нужны
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

// Добавьте иконки в библиотеку
library.add(faUserSecret)

// Зарегистрируйте компонент
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fa', FontAwesomeIcon)
})