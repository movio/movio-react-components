import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './h2.css';

/**
 * H2 Component
 * @class
 * @version 0.1
 */
const H2 = ({ children, className }) =>
  <h2 className={classnames(className, styles.h2)}>
    {children}
  </h2>;

/**
 * @property {object}     propTypes                   - H2 PropTypes
 * @property {string}     propTypes.className         - Context class name
 * @property {node}       propTypes.children          - Child node(s)
 */
H2.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H2;
export {
  styles,
};

