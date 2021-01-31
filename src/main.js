import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import {rutas} from './rutas.js'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const enrutador = new VueRouter({
  routes:rutas,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router:enrutador
}).$mount('#app')
