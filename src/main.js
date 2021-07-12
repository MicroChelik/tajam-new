import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import '@/styles/bootstrap.scss'
import CustomBtn from '@/components/CustomBtn'
import Separator from '@/components/Separator'

Vue.use(BootstrapVue)
Vue.component('CustomBtn', CustomBtn)
Vue.component('Separator', Separator)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
