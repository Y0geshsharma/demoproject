import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { QUERRY } from './constant'
Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    armyint: [],
    DroidArmy: [],
    TroopersArmy: [],
    BattleResult: [],
    BattleHistory: [],
    count: null,
    imgurl: '',
    armydata: []
  },
  actions: {
    getDroid ({ commit }) {
      Axios
        .get(QUERRY.GET_DROID)
        .then(data => {
          let post = data.data
          commit('SET_DROID', post)
        })
        .catch(error => { console.log(error) })
    },
    getTropper ({ commit }) {
      Axios
        .get(QUERRY.GET_TROPPER)
        .then(data => {
          let post = data.data
          commit('SET_TROPPER', post)
        })
        .catch(error => { console.log(error) })
    },
    getResult ({ commit }) {
      Axios
        .get(QUERRY.GET_RESULT)
        .then(data => {
          let post = data.data
          commit('SET_RESULT', post)
        })
        .catch(error => { console.log(error) })
    },
    getHistory ({ commit }) {
      Axios
        .get(QUERRY.GET_HISTORY)
        .then(data => {
          let post = data.data
          commit('SET_HISTORY', post)
        })
        .catch(error => { console.log(error) })
    },
    uploadCount ({ commit }) {
      let totalcount = 0
      totalcount = this.state.count
      Axios
        .post(QUERRY.POST_RESULT, { totalcount })
        .then((req, res) => {
        })
        .catch(error => { console.log(error) })
    },
    uploadarmy ({ commit }) {
      let data = []
      data = this.state.armydata
      console.log('check', data)
      Axios
        .post(QUERRY.POST_ARMY, { data })
        .then((req, res) => {
        })
        .catch(error => { console.log(error) })
    }
  },
  mutations: {
    SET_DROID (state, data) {
      state.DroidArmy = data
    },
    SET_TROPPER (state, data1) {
      state.TroopersArmy = data1
    },
    SET_RESULT (state, data2) {
      state.BattleResult = data2
    },
    SET_HISTORY (state, data3) {
      state.BattleHistory = data3
    }
  }
})
