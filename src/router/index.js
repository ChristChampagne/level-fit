import { createRouter, createWebHistory } from '@ionic/vue-router'; 
import HomePage from '../views/HomePage.vue';
import ListPage from '../views/List.vue';
import CardPage from '../views/Card.vue';
import Examen from  '../views/Examen.vue';
import Axios from '../views/AcordionAxios.vue'
import ModalParent from '../views/ModalParent.vue'
import LoginPrincipal from '../views/Login.vue'
import NuevoCalendario from '../views/Calendario.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/lista',
    name: 'List',
    component: ListPage
  },
  {
    path: '/cards',
    name: 'Card',
    component: CardPage
  },
  {
    path: '/examen',
    name: 'Examen',
    component:Examen
  },
  {
    path:'/axios',
    name:'Axios',
    component:Axios
  },
  {
    path:'/modal',
    name:'ModalParents',
    component:ModalParent
  },
  {
    path:'/login',
    name:"Login",
    component:LoginPrincipal
  },
  {
    path:'/calendario',
    name:"Calendario",
    component:NuevoCalendario
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
