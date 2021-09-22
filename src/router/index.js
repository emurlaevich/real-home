import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/About')
  },
  {
    path: '/property',
    name: 'Property',
    component: () => import('../components/Property')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../components/Blog')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../components/Contacts')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
