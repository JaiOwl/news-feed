import debug from 'debug';
import Vue from 'vue';
import NewsApiArticle from './news-api-article/NewsApiArticle.vue';
import { INewsApiArticle } from '../../models/INewsApiArticle';

// const debugLogger = debug('debug:HomePage');
// const infoLogger = debug('info:HomePage');
const warnLogger = debug('warn:HomePage');
// const errorLogger = debug('error:HomePage');

const NEWS_UPDATE_INTERVAL = 60 * 1000;

export default Vue.extend({
  name: 'Home',
  data: function (): { updateInterval: number | undefined } {
    return {
      updateInterval: undefined
    };
  },
  components: {
    'NewsApiArticle': NewsApiArticle
  },
  computed: {
    currentNewsArticlesAsArray (): Array<INewsApiArticle> {
      return this.$store.getters.currentNewsArticlesAsArray
        .slice(0)
        .sort(
          (a: INewsApiArticle, b: INewsApiArticle) => {
            const dateA: number = new Date(a.publishedAt).getTime();
            const dateB: number = new Date(b.publishedAt).getTime();
            return (dateB - dateA); // Reverse sort
          }
      );
    }
  },
  created () {
    this.$store.dispatch('updateCurrentNewsArticles')
      .catch(
        (error) => {
          warnLogger(`Failed to update Current News Articles => ${error}`);
        }
      );
    this.updateInterval = setInterval(
      () => {
        this.$store.dispatch('updateCurrentNewsArticles')
        .catch(
          (error) => {
            warnLogger(`Failed to update Current News Articles => ${error}`);
          }
        );
      },
      NEWS_UPDATE_INTERVAL
    );
  },
  destroyed () {
    if ( this.updateInterval !== undefined ) {
      clearInterval(this.updateInterval);
      delete this.updateInterval;
    }
  }
});
