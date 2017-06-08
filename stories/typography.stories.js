import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import H1 from '../src/components/H1/index';
import H2 from '../src/components/H2/index';
import H3 from '../src/components/H3/index';
import P from '../src/components/P/index';

import scaffoldingStyles from '../.storybook/scaffolding.css';

const stories = storiesOf('Typography', module);

stories.addDecorator(withKnobs);

stories
  .add('all', () => (
    <div className={scaffoldingStyles.verticalContainer}>
      <H1>Header 1</H1>
      <H2>Header 2</H2>
      <H3>Header 3</H3>
      <H3 secondary={true}>Secondary Header 3</H3>
      <P>
        This is a segment of paragraph text. This component should be used anywhere you would normally use the `p` HTML element
      </P>
    </div>
  ))
  .add('playground', () => (
    <div className={scaffoldingStyles.verticalContainer}>
      <H1>{text('H1 Label', 'Header 1')}</H1>
      <H2>{text('H2 Label', 'Header 2')}</H2>
      <H3 secondary={boolean('Secondary H3', false)}>
        {text('H3 Label', 'Header 3')}
      </H3>
      <P>
        {text(
          'P Text',
          'This is a segment of paragraph text. This component should be used anywhere you would normally use the paragraph HTML element'
        )}
      </P>
    </div>
  ));
