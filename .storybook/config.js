import { configure } from '@storybook/vue';

import Vue from 'vue';

// Import your custom components.
import CitrButton from '../src/components/CitrButton.vue';

// Register custom components.
Vue.component( 'CitrButton', CitrButton );

function loadStories() {
  // You can require as many stories as you need.
  require( '../src/stories' );
}

configure( loadStories, module );