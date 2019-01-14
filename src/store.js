import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layoutArea: [],
  },
  mutations: {
    addLayerToLayout(state, layoutItems) {
      state.layoutArea.push(layoutItems);
    },
  },
});
