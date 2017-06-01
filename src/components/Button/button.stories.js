import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { styles } from './index';

const clickHandler = action('click');

storiesOf('Button', module)
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
    <Button onClick={clickHandler} className={styles.loading}>Custom</Button>
  ));
