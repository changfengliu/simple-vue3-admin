import { createApp } from 'vue'

import App from './App.vue'

import installElementPlus from './plugins/element'
import installVueRouter from './plugins/vue-router'
import installVuex from './plugins/vuex'

const app = createApp(App)
installVueRouter(app)
installVuex(app)
installElementPlus(app)

app.mount('#app')

// 参考：
// https://v3.cn.vuejs.org/
// https://github.com/vuejs/vue-next