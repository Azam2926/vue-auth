import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = Axios
const token = localStorage.getItem('token')
if (token)
  Vue.prototype.$http.defaults.headers.common['Authorizaton'] = token

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
