import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrarView from '@/views/Registrar.vue'
import LoginView from '@/views/Login.vue'
import ListaReproducion from '@/views/ListaReproducion'







Vue.use(VueRouter)

const routes = [
  {
    path: '/registrar',
    name: 'registrar',
    component: RegistrarView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/lista',
    name: 'Lista',
    component: ListaReproducion

  },
 
 
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
