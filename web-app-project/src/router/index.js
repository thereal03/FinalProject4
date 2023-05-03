import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home')
  },
  {
    path: '/nutrition',
    name: 'nutrition',
    component: () => import('../components/Nutrition')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/Record')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditRecord')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../components/About')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router