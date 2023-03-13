import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/UserHome/UserHome.vue'),
    meta: {
      title: '北洞事務所'
    }
  },
  {
    path: '/register',
    component: () => import('../views/Register/RegisterView.vue'),
    meta: {
      title: '註冊'
    }
  },
  {
    path: '/login',
    component: () => import('../views/Login/LoginView.vue'),
    meta: {
      title: '登入'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
