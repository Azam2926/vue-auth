import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Secure from '@/components/Secure'
import About from '@/views/About'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/secure',
      name: 'secure',
      component: Secure,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
