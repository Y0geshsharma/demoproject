import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { QUERY } from './constant'
Vue.use(Vuex)
Vue.notify({
  group: 'foo',
  title: 'Important message',
  text: 'Hello user! This is a notification!'
})
export const store = new Vuex.Store({
  state: {
    armyInt: [],
    droid: [],
    trooper: [],
    battleResult: [],
    battleHistory: [],
    count: null,
    imgURL: '',
    armyData: []
  },
  actions: {
    getDroid ({ commit }) {
      Axios
        .get(QUERY.GET_DROID)
        .then(data => {
          let post = data.data
          commit('SET_DROID', post)
        })
        .catch(error => { alert(error) })
    },
    getTrooper ({ commit }) {
      Axios
        .get(QUERY.GET_TROOPER)
        .then(data => {
          let post = data.data
          commit('SET_TROOPER', post)
        })
        .catch(error => { this.notify(error) })
    },
    getResult ({ commit }) {
      Axios
        .get(QUERY.GET_RESULT)
        .then(data => {
          let post = data.data
          commit('SET_RESULT', post)
        })
        .catch(error => { alert(error) })
    },
    getHistory ({ commit }) {
      Axios
        .get(QUERY.GET_HISTORY)
        .then(data => {
          let post = data.data
          commit('SET_HISTORY', post)
        })
        .catch(error => { alert(error) })
    },
    uploadCount ({ commit }) {
      let totalCount = 0
      totalCount = this.state.count
      Axios
        .post(QUERY.POST_RESULT, { totalCount })
        .then((req, res) => {
        })
        .catch(error => { alert(error) })
    },
    uploadArmy ({ commit }) {
      let data = []
      data = this.state.armyData
      console.log('check', data)
      Axios
        .post(QUERY.POST_ARMY, { data })
        .then((req, res) => {
        })
        .catch(error => { alert(error) })
    }
  },
  mutations: {
    SET_DROID (state, data) {
      state.droid = data
    },
    SET_TROOPER (state, data1) {
      state.trooper = data1
    },
    SET_RESULT (state, data2) {
      state.battleResult = data2
    },
    SET_HISTORY (state, data3) {
      state.battleHistory = data3
    }
  }
})
