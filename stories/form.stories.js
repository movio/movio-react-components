import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import TextInput from '../src/components/TextInput/index';

import scaffoldingStyles from '../.storybook/scaffolding.css';
import utilStyles from '../.storybook/utils.css';

const clickHandler = action('click');
const inputHandler = action('input');

const stories = storiesOf('Form Elements', module);

stories.addDecorator(withKnobs);

stories
  .add('text input (basic)', () => (
    <TextInput name="input-base" onChange={inputHandler} />
  ))
  .add('text input (with label)', () => (
    <TextInput name="input-with-label" onChange={inputHandler} label="Label" />
  ))
  .add('text input (playground)', () => (
    <TextInput
      name="input-playground"
      inputType={select(
        'Input Type',
        {
          text: 'Text',
          number: 'Number',
        },
        'text'
      )}
      disabled={boolean('Disabled', false)}
      onChange={inputHandler}
      placeholder={text('Placeholder', '...')}
      label={text('Label', '')}
    />
  ));
