import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'


Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    jwt: 0
  },
  mutations:{
    setJwt(state, payload){
      state.jwt = payload
    }
  }
})
export default store