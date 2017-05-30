import React, { PropTypes } from 'react';
import classnames from 'classnames';

import H2 from '../../components/H2';

import styles from './component-group.css';

const ComponentGroup = ({ className, children, title, childrenClassName }) => (
  <div className={classnames(className, styles.container)}>
    <H2 className={styles.title}>{title}</H2>
    <div className={classnames(childrenClassName, styles.childrenContainer)}>
      {children}
    </div>
  </div>
);

ComponentGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  childrenClassName: PropTypes.string,
};

ComponentGroup.defaultProps = {
  className: null,
  childrenClassName: null,
};

export default ComponentGroup;
export { styles };
