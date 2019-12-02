import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/levels',
    name: 'levels',
    // route level code-splitting
    // this generates a separate chunk (levels.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "levels" */ '../views/Levels.vue')
  },
  {
    path: '/tests',
    name: 'Tests',
    // route level code-splitting
    // this generates a separate chunk (tests.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "tests" */ '../views/Tests.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
