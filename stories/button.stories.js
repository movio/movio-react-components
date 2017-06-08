import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from '../src/components/Button/index';

import scaffoldingStyles from '../.storybook/scaffolding.css';
import utilStyles from '../.storybook/utils.css';

const clickHandler = action('click');

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories
  .add('primary', () => <Button onClick={clickHandler}>Primary</Button>)
  .add('secondary', () => (
    <Button onClick={clickHandler} secondary={true}>
      Secondary
    </Button>
  ))
  .add('disabled', () => (
    <Button onClick={clickHandler} disabled={true}>Disabled</Button>
  ))
  .add('loading', () => (
    <Button onClick={clickHandler} loading={true}>Loading</Button>
  ))
  .add('custom class', () => (
    <Button onClick={clickHandler} className={utilStyles.small}>Custom</Button>
  ))
  .add('all', () => (
    <div className={scaffoldingStyles.horizontalContainer}>
      <Button onClick={clickHandler}>Primary</Button>
      <Button onClick={clickHandler} secondary={true}>
        Secondary
      </Button>
      <Button onClick={clickHandler} disabled={true}>Disabled</Button>
      <Button onClick={clickHandler} loading={true}>Loading</Button>
      <Button onClick={clickHandler} className={utilStyles.small}>
        Custom
      </Button>
    </div>
  ))
  .add('playground', () => (
    <Button
      onClick={clickHandler}
      disabled={boolean('Disabled', false)}
      secondary={boolean('Secondary', false)}
      loading={boolean('Loading State', false)}
      className={select(
        'Custom Clasnames',
        {
          [utilStyles.red]: 'Red',
          [utilStyles.green]: 'Green',
          [utilStyles.small]: 'Small',
          [utilStyles.large]: 'Large',
          0: 'None',
        },
        0
      )}
    >
      {text('Label', 'Button')}
    </Button>
  ));
