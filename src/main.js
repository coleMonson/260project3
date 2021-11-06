import Vue from 'vue'
import App from './App.vue'
import router from './router'
import albums from './mock-data.js'

Vue.config.productionTip = false

let data = {
  albums: albums,
  tracks: [],
  cart: []
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')