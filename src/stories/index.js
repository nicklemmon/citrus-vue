import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import HelloWorld from '../components/HelloWorld.vue';

storiesOf( 'MyButton', module )
  .add('story as a component', () => ({
    components: { HelloWorld },
    template: '<hello-world :rounded="true">rounded</hello-world>'
}));