import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './h3.css';

/**
 * H3 Component
 * @class
 * @version 0.1
 */
const H3 = ({ children, className }) =>
  <h3 className={classnames(className, styles.h3)}>
    {children}
  </h3>;

/**
 * @property {object}     propTypes                   - H3 PropTypes
 * @property {string}     propTypes.className         - Context class name
 * @property {node}       propTypes.children          - Child node(s)
 */
H3.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H3;
export {
  styles,
};

