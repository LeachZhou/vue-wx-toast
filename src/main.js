import Vue from 'vue'
import App from './App.vue'
import wxToast from './plugin/wxToast/wxToast'

Vue.use(wxToast)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
