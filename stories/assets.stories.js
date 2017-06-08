import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../src/components/Logo/index';

import scaffoldingStyles from '../.storybook/scaffolding.css';

const stories = storiesOf('SVG Assets', module);

stories.add('logo', () => (
  <div className={scaffoldingStyles.logoContainer}><Logo /></div>
));
