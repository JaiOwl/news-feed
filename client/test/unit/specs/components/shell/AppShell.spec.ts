import { shallow } from '@vue/test-utils';
import AppShell from '@/components/shell/AppShell.vue';

describe('AppShell.vue',
  () => {
    it('should render correct contents',
      () => {
        const iut = shallow(AppShell,
          {
            stubs: ['router-link', 'router-view']
          }
        );
        expect(iut.element).not.toBeNull();
        expect(iut.element).not.toBeUndefined();
      }
    );
  }
);
