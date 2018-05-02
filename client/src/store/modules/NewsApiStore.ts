import debug from 'debug';
import { post } from '../../services/backend';
import { INewsApiArticle } from '../../models/INewsApiArticle';
import * as Vuex from 'vuex';

const debugLogger = debug('debug:NewsApiStore');
// const infoLogger = debug('info:NewsApiStore');
const warnLogger = debug('warn:NewsApiStore');
// const errorLogger = debug('error:NewsApiStore');


export default {
  state: {
    currentNewsArticles: []
  },

  mutations: {
    setCurrentNewsArticles: (state: any, value: Array<INewsApiArticle>) => {
      if (value !== undefined) {
        debugLogger(`setCurrentNewsArticles`, value);
        const update = (value != undefined) ? [...value] : [];
        state.currentNewsArticles = update;
      }
    }
  },

  actions: {
    setCurrentNewsArticles: async ({commit}: {commit: Vuex.Commit}, value: Array<INewsApiArticle>): Promise<void> => {
      return commit('setCurrentNewsArticles', value);
    },
    updateCurrentNewsArticles: async ({commit}: {commit: Vuex.Commit}): Promise<void> => {
      debugLogger('Updating Current News Articles');

      let data: Array<INewsApiArticle> = [];
      try {
        debugLogger('Requesting Current News Articles');
        const response = await post( '/api/topnewsheadlines', {} );
        if (response.status !== 200) throw new Error(`Request failed [${response.status}]`);
        data = response.data;
        debugLogger('Returned Current News Articles');
      } catch (error) {
        warnLogger(`Failed to retrieve Current News Articles from server => ${error.message}`, error);
        throw error;
      }
      if (data === undefined) return;

      commit('setCurrentNewsArticles', data);
      debugLogger('Updated Current News Articles');
    }
  },

  getters: {
    currentNewsArticlesAsArray: (state: any) => {
      return [...state.currentNewsArticles];
    }
  }
};
