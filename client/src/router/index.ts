import Vue from 'vue';
import Router from 'vue-router';
import AppShell from '@/components/shell/AppShell.vue';
import Home from '@/components/home/HomePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: AppShell,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: '',
          name: 'Root',
          redirect: '/home'
        },
        {
          // Default error catch route to home page
          path: '*',
          name: '404',
          redirect: '/home'
        }
      ]
    }
  ]
});
