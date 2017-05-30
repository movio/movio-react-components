import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './h3.css';

const H3 = ({ children, className }) => (
  <h3 className={classnames(className, styles.h3)}>
    {children}
  </h3>
);

H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

H3.defaultProps = {
  className: null,
};

export default H3;
export { styles };
