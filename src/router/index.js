import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import ArmyDetails from '../views/ArmyDetails.vue'
import Battle from '@/views/Battle.vue'
import UploadArmy from '@/views/UploadArmy.vue'
import BattleHistory from '@/views/BattleHistory.vue'
import BattleResult from '@/views/BattleResult.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/droid',
    name: 'droid',
    component: ArmyDetails

  },
  {
    path: '/troopers',
    name: 'troopers',
    component: ArmyDetails

  },
  {
    path: '/troopers/add',
    name: 'addtroopersarmy',
    component: UploadArmy
  },
  {
    path: '/droid/add',
    name: 'adddroidarmy',
    component: UploadArmy
  },
  {
    path: '/battle',
    name: 'battleground',
    component: Battle

  },
  {
    path: '/battle/history',
    name: 'history',
    component: BattleHistory
  },
  {
    path: '/battle/result',
    name: 'result',
    component: BattleResult
  }
]

const router = new VueRouter({
  routes
})

export default router
