import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import CitrButton from '../components/CitrButton.vue';

storiesOf( 'Button', module).add('story as a component', () => ({
  components: { CitrButton },
  template: '<CitrButton type="primary">Click Me</CitrButton>'
}));
