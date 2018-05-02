import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import AppNavBar from '@/components/shell/AppNavBar.vue';

Vue.use(BootstrapVue);

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('AppNavBar.vue',
  () => {
    it('should have a brand title of News-Feed',
      () => {
        const iut = shallow(AppNavBar,
          {
            stubs: ['router-link', 'router-view'],
            mocks: {
              $store: {
                state: {
                  route: {
                    path: '/'
                  }
                }
              }
            },
            localVue
          }
        );
        expect(iut.element.querySelector('.navbar-brand b').textContent)
          .toEqual(' News-Feed');
      }
    );
  }
);
