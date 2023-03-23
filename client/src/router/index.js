import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/UserHome/UserHome.vue'),
    meta: {
      title: '下一餐'
    }
  },
  {
    path: '/user_edit',
    component: () => import('../views/Edit/Edit.vue'),
    meta: {
      title: '基本資料'
    }
  },
  {
    path: '/user_register',
    component: () => import('../views/Register/UserRegister.vue'),
    meta: {
      title: '註冊'
    }
  },
  {
    path: '/shop_register',
    component: () => import('../views/Register/ShopRegister.vue'),
    meta: {
      title: '註冊餐廳'
    }
  },
  {
    path: '/user_login',
    component: () => import('../views/Login/UserLogin.vue'),
    meta: {
      title: '使用者登入'
    }
  },
  {
    path: '/shop_login',
    component: () => import('../views/Login/ShopLogin.vue'),
    meta: {
      title: '管理員登入'
    }
  },
  {
    path: '/test',
    component: () => import('../views/UserHome/test.vue'),
    meta: {
      title: '測試'
    }
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    meta: {
      title: '後台'
    },
    children: [
      {
        path: 'shop',
        component: () => import('../views/Dashboard/DashboardShop.vue'),
        meta: {
          title: '商店資訊'
        }
      },
      {
        path: 'product',
        component: () => import('../views/Dashboard/DashbordProduct.vue'),
        meta: {
          title: '商品資訊'
        }
      },
      {
        path: 'order',
        component: () => import('../views/Dashboard/DashbordOrder.vue'),
        meta: {
          title: '訂單資訊'
        }
      },
      {
        path: 'discount',
        component: () => import('../views/Dashboard/DashbordDiscount.vue'),
        meta: {
          title: '優惠卷'
        }
      }
    ]
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
