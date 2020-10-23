/*
 * @Author: 胡小汇
 * @Date: 2020-10-16 14:32:10
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-19 16:00:33
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vant from 'vant'
import router from '@/router'

import '@/style/border.css'
import '@/style/reset.css'
import 'vant/lib/index.css'
import { filterUrl } from '@/uilts/filterUrl'

Vue.prototype.$filterUrl = filterUrl

Vue.use(vant)
Vue.prototype.$axios = axios

var FastClick = require('fastclick');
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
