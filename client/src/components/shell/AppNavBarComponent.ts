import Vue from 'vue';

export default Vue.extend({
  name: 'AppNavBar',
  computed: {
    routePath (): string {
      return this.$store.state.route.path;
    }
  }
});
