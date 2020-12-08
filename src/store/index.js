import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem("ISCOLLAPSE")) || false
  },
  mutations: {
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse;
      // 只能存字符串
      sessionStorage.setItem("ISCOLLAPSE", JSON.stringify(state.isCollapse));
    },
    low() {
      console.log(111);
    }
  },
  actions: {
    up({ commit }) {
      commit('low')
    }
  },
  modules: {}
});
