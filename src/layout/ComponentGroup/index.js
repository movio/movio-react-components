import React, { PropTypes } from 'react';
import classnames from 'classnames';

import H2 from '../../components/H2';

import styles from './component-group.css';

const ComponentGroup = ({ className, children, title }) =>
  <div className={classnames(className, styles.container)}>
    <H2 className={styles.title}>{title}</H2>
    {children}
  </div>;

ComponentGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default ComponentGroup;
export {
  styles,
};

