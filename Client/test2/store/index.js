import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const state = () => ({
    inputValue: '',
    isDark: false,
  })
  
  export const mutations = {
    updateSharedDataSearch(state, newValue) {
      state.inputValue = newValue;
      // console.log(state.inputValue);
    },
    updateIsDark(state, newValue) {
      state.isDark = newValue;
      // console.log(state.inputValue);

    }
  };
