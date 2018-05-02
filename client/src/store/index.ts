import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import NewsApiStore from './modules/NewsApiStore';

export default new Vuex.Store(
  {
    modules: {
      NewsApiStore: NewsApiStore
    },
    strict: true
  }
);
