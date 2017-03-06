import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './h2.css';

const H2 = ({ children, className }) =>
  <h2 className={classnames(className, styles.h2)}>
    {children}
  </h2>;

H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

H2.defaultProps = {
  className: null,
};

export default H2;
export {
  styles,
};

