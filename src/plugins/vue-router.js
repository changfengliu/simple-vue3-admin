import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/Index'
import About from '@/pages/About'

const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default (app) => {
  app.use(router)
}

// 参考：https://next.router.vuejs.org/introduction.html