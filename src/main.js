import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n';
import vuescroll from 'vuescroll';
import VModal from 'vue-js-modal'

import "@/assets/css/common.css"
import "@/assets/css/style.css"
import "@/assets/css/vuescroll.css"
import zh from '@/i18n/zh'
import en from '@/i18n/en'

Vue.config.productionTip = false

import {
  client
} from 'ontology-dapi'
client.registerClient({})

Vue.use(VModal, { dialog: true, dynamic: true })
Vue.use(vuescroll, {
  ops: {
    // The global config
    mode: 'slide',
    scroller: {
      // bouncing: false
    }
  },
})
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'zh',
  messages: {
    'zh': zh,
    'en': en
  }
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
