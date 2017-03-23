// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './button.css';

type ClickHandler = (args?: any) => mixed;

type Props = {
  className?: string,
  onClick: ClickHandler,
  disabled?: boolean,
  children?: ReactChildren,
};

const Button = ({
  className = '',
  onClick,
  disabled = false,
  children,
  ...props }: Props) =>
    <button
      className={classnames(className, styles.button, { [styles.disabled]: disabled })}
      onClick={onClick}
      disabled={disabled === true}
      {...props}
    >
      {children}
    </button>;

export default Button;

export {
  styles,
};

