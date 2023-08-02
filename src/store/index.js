import { createStore } from 'vuex';
import mutations from './mutations';
import getters from './getters';
import state from './state';

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  state,
  mutations,
  getters,
  strict: debug
})