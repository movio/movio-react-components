import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Code from './index';

import utilStyles from '../../../.storybook/utils.css';

const stories = storiesOf('Code', module);

stories.addDecorator(withKnobs);

const exampleCode = `const add = (a, b) => a + b;
const map = (fn, xs) => xs.map(fn);

.container {
  background: var(--color-bg);
  color: white;
  padding: 1rem;
  border-radius: var(--border-radius);
}

.code {
  color: var(--color-text);
}
`;

stories.add('base', () => <Code code={exampleCode} />).add('with knobs', () => (
  <Code
    code={text('Code', exampleCode)}
    className={select(
      'Custom Clasnames',
      {
        [utilStyles.small]: 'Small',
        [utilStyles.large]: 'Large',
        0: 'None',
      },
      0
    )}
  />
));
