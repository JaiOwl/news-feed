import Vue from 'vue';

import AppNavBar from './AppNavBar.vue';

export default Vue.extend({
  name: 'AppShell',
  components: {
    'AppNavBar': AppNavBar
  },
  data () {
    return {
      pageName: 'AppShell Page'
    };
  }
});
