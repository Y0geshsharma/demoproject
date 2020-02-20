import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ArmyDetails from '../views/ArmyDetails.vue'
import Battle from '../views/Battle.vue'
import UploadArmy from '../views/UploadArmy.vue'
import BattleHistory from '../views/BattleHistory.vue'
import BattleResult from '../views/BattleResult.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/droidarmy',
    name: 'droidarmy',
    component: ArmyDetails

  },
  {
    path: '/tropperarmy',
    name: 'troppersarmy',
    component: ArmyDetails

  },
  {
    path: '/addtroppersarmy',
    name: 'addtropperarmy',
    component: UploadArmy
  },
  {
    path: '/adddroidarmy',
    name: 'adddroidarmy',
    component: UploadArmy
  },
  {
    path: '/battleground',
    name: 'battleground',
    component: Battle

  },
  {
    path: '/battlehistory',
    name: 'battlehistory',
    component: BattleHistory
  },
  {
    path: '/battleresult',
    name: 'battleresult',
    component: BattleResult
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: About
  //   // () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
