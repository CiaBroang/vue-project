import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeComponent.vue'
import Cart from '../views/CartComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/cart',
      name: 'cart',
      component: Cart
    }
  ]
})

export default router