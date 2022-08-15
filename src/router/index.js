import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import ListPage from '../views/List.vue'
import CardsPage from '../views/Card.vue'
import SeriesPage from '../views/Examen.vue'
import ChipsPage from '../views/chip.vue'
import FooterP from '../views/footer.vue'
import GaleriaP from '../views/Gallery.vue'
import MenuS_ from '../views/Menu.vue'
// import Menu_ionic from '../views/Menu.vue'
const routes = [
  {
    path: '/',
    redirect: '/home'
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
    component: CardsPage
  },
  {
    path:'/examen',
    name:'Examen',
    component: SeriesPage
  },
  {
    path:'/chips',
    name:'Chip',
    component: ChipsPage
  },
  {
    path:'/footer',
    name:'Footer',
    component: FooterP
  },
  {
    path:'/galeria',
    name:'Galeria',
    component: GaleriaP
  },
   {
     path:'/menu',
     name:'Menu',
     component:MenuS_
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
