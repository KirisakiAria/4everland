//基础
import Vue from 'vue'
import router from './router'
//根元素
import App from './App.vue'
//第三方插件
import Toasted from 'vue-toasted'
//引入样式
import './assets/css/base.less'
//axios配置
import './request/requestConfig'

Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
