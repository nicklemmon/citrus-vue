
import { configure, setAddon } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';

import Vue from 'vue';

// Define options for addon presentation
setOptions({
  name: 'README addon',
  url: 'https://github.com/tuchk4/storybook-readme',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});

// Import your custom components.
import CitrButton from '../src/components/CitrButton.vue';

// Register custom components.
Vue.component( 'CitrButton', CitrButton );

function loadStories() {
  // You can require as many stories as you need.
  require( '../src/stories' );
}

configure( loadStories, module );