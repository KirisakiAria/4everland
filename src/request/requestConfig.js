import Vue from 'vue'
import axios from 'axios'

//返回码非200统一处理
axios.interceptors.response.use(
    res => {
        if (res.status !== 200) {
            Vue.toasted.show('请求出错，请重试')
        }
        return res
    },
    error => {
        Vue.toasted
            .show('网络错误，请重试', {
                position: 'bottom-center',
            })
            .goAway(2500)
        return Promise.reject(error)
    },
)

Vue.prototype.$axios = axios
Vue.prototype.$get = axios.get
Vue.prototype.$post = axios.post
Vue.prototype.$put = axios.put
Vue.prototype.$delete = axios.delete
