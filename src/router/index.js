import { createRouter, createWebHistory } from 'vue-router'
import CalcView from '../views/CalcView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Calc',
      component: CalcView
    }
  ]
})

export default router
