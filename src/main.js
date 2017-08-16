/*import Vue from 'vue'
 import App from './App.vue'

 import Router from 'vue-router'  //路由

 import { routes } from './router.config' //路由设置

 import axios from 'axios' //ajax
 import Vuex from 'vuex'  //状态管理
 import rem from './libs/rem'
 import jquery from 'jquery'

 import './assets/css/reset.css'
 import './libs/rem.js'

 Vue.use(Router);
 Vue.use(Vuex);
 //Vue.prototype.$http = axios;
 Vue.prototype.jQuery = jquery

 const router = new Router({
 routes
 });

 new Vue({
 el: '#app',
 router,
 render: h => h(App),
 mounted() {


 }
 })*/

import 'babel-polyfill'
// es6对象数组方法的polyfill
import 'core-js'
import 'whatwg-fetch'  //fetch.js 请求
import Vue from 'vue'
import Router from 'vue-router'
// import {toast} from './plugins/toast/index'
import {config} from './libs/config'

import store from './store'
import App from './App.vue'
import {routes} from './router.config'

import './libs/rem.js'
import './assets/css/reset.css'

//import 'vconsole/dist/vconsole.min'

// import { ToastPlugin } from './plugins/vux-toast'
// Vue.use(ToastPlugin)

Vue.use(Router)
Vue.use(config)

// console.log(toast)
// Vue.use(toast)

const router = new Router({
  routes
});

router.beforeEach((to, form, next) => {
  store.commit('SHOW_LOADING')
  next()
})
router.afterEach(route => {
  store.commit('HIDE_LOADING')
})

 var vm =  new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

