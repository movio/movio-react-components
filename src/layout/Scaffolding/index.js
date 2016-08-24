import React from 'react';
import classnames from 'classnames';

import Header from '../Header';
import Sidebar from '../Sidebar';
import Content from '../Content';
import ComponentGroup, { styles as cmpGroupStyles } from '../ComponentGroup';
import Button, { styles as btnStyles } from '../../components/Button';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import H3, { styles as h3Styles } from '../../components/H3';
import P from '../../components/P';
import Code from '../../components/Code';
import { enhanceOverlay } from '../../enhancers/';

import styles from './scaffolding.css';

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

const ButtonWithTooltip = enhanceOverlay(Button);

const Scaffolding = () =>
  <div className={styles.container}>
    <Header />
    <Sidebar items={['Introduction', 'Typography', 'Buttons']} />
    <Content>
      <ComponentGroup title="Introduction">
        <P className={cmpGroupStyles.blockType}>
          This application shows all the components currently residing in this library.
          Some components are interactive, play around and see for yourself.
        </P>
      </ComponentGroup>
      <ComponentGroup title="Typography">
        <H1 className={styles.type}>H1 - Main heading</H1>
        <H2 className={styles.type}>H2 - Secondary heading</H2>
        <H3 className={styles.type}>H3 - Smaller heading</H3>
        <H3 className={classnames(styles.type, h3Styles.secondary)}>H3 - Variation</H3>
        <P className={cmpGroupStyles.blockType}>
          Paragraph - At vero eos et accusamus et iusto odio dignissimos ducimus
          qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati Link cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est laborum
          et dolorum fuga. Et harum quidem rerum facilis est et expedita distinction.
        </P>
        <Code
          className={cmpGroupStyles.blockType}
          code={exampleCode}
        />
      </ComponentGroup>
      <ComponentGroup title="Buttons">
        <Button onClick={() => {}} className={cmpGroupStyles.nonFw}>Button</Button>
        <Button
          onClick={() => {}}
          className={classnames(btnStyles.secondary, cmpGroupStyles.nonFw)}
        >
          Secondary
        </Button>
        <Button onClick={() => {}} className={cmpGroupStyles.nonFw} disabled={true}>Disabled</Button>
        <Button
          onClick={() => {}}
          className={classnames(btnStyles.loading, cmpGroupStyles.nonFw)}
        >
          Loading Button
        </Button>
        <ButtonWithTooltip
          onClick={() => {}}
          placement="bottom"
          overlay={<div>Hi i am tooltip!</div>}
        >
          Tooltip
        </ButtonWithTooltip>
      </ComponentGroup>
    </Content>
  </div>;

export default Scaffolding;

