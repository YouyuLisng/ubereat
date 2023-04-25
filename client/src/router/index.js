import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/UserHome/Store.vue'),
    meta: {
      title: '線上訂購餐點！'
    },
  },
  {
    path: '/store/:id',
    component: () => import('../views/UserHome/Shop.vue'),
    meta: {
      title: '商店'
    }
  },
  {
    path: '/product/:id',
    component: () => import('../views/UserHome/Product.vue'),
    meta: {
      title: '商品資訊'
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
    path: '/dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    meta: {
      title: '後台'
    },
    children: [
      {
        path: 'product',
        component: () => import('../views/Dashboard/Dashboard_Product/DashboardMenu.vue'),
        meta: {
          title: '商品資訊'
        },
        children: [
          {
            path: 'product-list',
            component: () => import('../views/Dashboard/Dashboard_Product/DashbordProductList.vue'),
            meta: {
              title: '商品概覽'
            }
          },
          {
            path: 'product-type',
            component: () => import('../views/Dashboard/Dashboard_Product/DashbordOrder.vue'),
            meta: {
              title: '商品類別'
            }
          },
          {
            path: 'option-group',
            component: () => import('../views/Dashboard/Dashboard_Product/DashbordOption.vue'),
            meta: {
              title: '客製化群組'
            }
          },
        ]
      },
      {
        path: 'home',
        component: () => import('../views/Dashboard/Dashboard_Home/DashboardHome.vue'),
        meta: {
          title: '編輯商店資訊'
        }
      },
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
