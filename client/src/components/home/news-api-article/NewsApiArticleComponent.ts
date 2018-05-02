import debug from 'debug';
import Vue from 'vue';

// const debugLogger = debug('debug:NewsApiArticle');
// const infoLogger = debug('info:NewsApiArticle');
const warnLogger = debug('warn:NewsApiArticle');
// const errorLogger = debug('error:NewsApiArticle');

export default Vue.extend({
  name: 'NewsApiArticle',
  props: [ 'NewsApiArticle' ],
  components: {},
  computed: {}
});
