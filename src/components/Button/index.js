import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './button.css';

/**
 * Button Component
 * @class
 * @version 0.1
 */
const Button = ({ className, onClick, disabled, children }) =>
  <button
    className={classnames(className, styles.button, { [styles.disabled]: disabled })}
    onClick={onClick}
    disabled={disabled === true}
  >
    {children}
  </button>;

/**
 * @property {object}     propTypes                   - Button PropTypes
 * @property {string}     propTypes.className         - Input class name for the button, defaults to styles.button
 * @property {function}   propTypes.onClick           - On Click handler
 * @property {boolean}    propTypes.disabled          - Disabled flag
 * @property {node}       propTypes.children          - Child node(s)
 */
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;

export {
  styles,
};

