import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './h1.css';

/**
 * H1 Component
 * @class
 * @version 0.1
 */
const H1 = ({ children, className }) =>
  <h1 className={classnames(className, styles.h1)}>
    {children}
  </h1>;

/**
 * @property {object}     propTypes                   - H1 PropTypes
 * @property {string}     propTypes.className         - Context class name
 * @property {node}       propTypes.children          - Child node(s)
 */
H1.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default H1;
export {
  styles,
};

