import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/ads',
      name: 'Ads',
      component: () => import(/* webpackChunkName: "poster" */ './views/Ads.vue')
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: () => import(/* webpackChunkName: "introduction" */ './views/Introduction.vue')
    },
    {
      path: '/community',
      name: 'Community',
      component: () => import(/* webpackChunkName: "community" */ './views/Community.vue')
    },
    {
      path: '/dealer',
      name: 'Dealer',
      component: () => import(/* webpackChunkName: "dealer" */ './views/Dealer.vue')
    },
    // {
    //   path: '*',
    //   redirect: { name: 'Home' }
    // }
  ]
})

export default router
