import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme, withDocs, doc } from 'storybook-readme';

import CitrButton from '../components/CitrButton.vue';
import CitrButtonReadme from '../components/CitrButton.md';

storiesOf( 'withDocs/As Decorator', module)
  .addDecorator( withKnobs )
  .addDecorator( withDocs( CitrButtonReadme ) )
  .add('Button', () => {
    return {
      components: {
        CitrButton,
      },
      template: `<CitrButton type="primary">My Button</CitrButton>`,
    };
  });

