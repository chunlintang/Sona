import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// import router from './router'

// Vue.config.productionTip = false

import 'assets/styles/index.styl'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: 'https://i.loli.net/2018/12/23/5c1f9ca405a2d.jpeg'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
