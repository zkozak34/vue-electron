import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home/index.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/About/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
