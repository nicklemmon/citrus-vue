import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import HelloWorld from '../src/components/HelloWorld.vue';

// Register custom components.
Vue.component( 'hello-world', HelloWorld );

function loadStories() {
  // You can require as many stories as you need.
  require( '../src/stories' );
}

configure( loadStories, module );