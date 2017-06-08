// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './button.css';

type ClickHandler = (args?: any) => mixed;

type Props = {
  className: string,
  onClick: ClickHandler,
  disabled?: boolean,
  children?: ReactChildren,
  secondary?: boolean,
  loading?: boolean,
};

const Button = ({
  className = '',
  onClick,
  disabled = false,
  children,
  secondary,
  loading,
  ...props
}: Props) => {
  const btnClasses = classnames({
    [className]: className && !disabled,
    [styles.base]: true,
    [styles.button]: !disabled,
    [styles.disabled]: disabled,
    [styles.secondary]: !disabled && secondary,
    [styles.loading]: loading,
  });
  return (
    <button
      className={btnClasses}
      onClick={onClick}
      disabled={disabled === true}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
export { styles };
