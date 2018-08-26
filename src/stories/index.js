import Vue from 'vue';

import { storiesOf } from '@storybook/vue';
import { withKnobs, text, select,  boolean } from '@storybook/addon-knobs';
import { withReadme, withDocs, doc } from 'storybook-readme';

import CitrButton from '../components/CitrButton.vue';
import CitrButtonReadme from '../components/CitrButton.md';

storiesOf( 'withDocs/As Decorator', module)
  .addDecorator( withKnobs )
  .addDecorator( withDocs( CitrButtonReadme ) )
  .add('Button', () => {
    const type = select( 'Type', { primary: 'primary', secondary: 'secondary' }, 'primary', 'button-type' );

    return {
      components: {
        CitrButton,
      },
      template: `<CitrButton type=${type}>My Button</CitrButton>`,
    };
  });

