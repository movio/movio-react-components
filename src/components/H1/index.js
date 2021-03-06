import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './h1.css';

const H1 = ({ children, className }) =>
  <h1 className={classnames(className, styles.h1)}>
    {children}
  </h1>;

H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H1;
export {
  styles,
};

