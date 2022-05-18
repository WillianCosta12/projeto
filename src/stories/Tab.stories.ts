import { Meta, Story } from '@storybook/angular';

import { TabComponent} from '../app/components/tab/tab.component';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Tabs/TabComponent',
  component: TabComponent,
} as Meta;

export const Tab: Story = () => ({
  props: {
    ids:  ['Tab-01', 'Tab-02','Tab-03', 'Tab-04'],
    contents: ['Esse é o texto do Primeiro Tab', 'Esse é o texto do Segundo Tab', 'Esse é o texto do Terceiro Tab', 'Esse é o texto do Quarto Tab'],
  },
});