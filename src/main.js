import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'vant'
import vConsole from 'vconsole'

Vue.config.productionTip = false

Vue.use(Button)

var vconsole = new vConsole()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
