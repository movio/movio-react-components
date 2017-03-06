import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './button.css';

const Button = ({ className, onClick, disabled, children, ...props }) =>
  <button
    className={classnames(className, styles.button, { [styles.disabled]: disabled })}
    onClick={onClick}
    disabled={disabled === true}
    {...props}
  >
    {children}
  </button>;

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: null,
  disabled: false,
};

export default Button;

export {
  styles,
};

