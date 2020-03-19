import Vue from 'vue'

import App from './App'
import router from './router'
import './plugins/element.js'



Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.error(from)
//   console.log(next)

// })