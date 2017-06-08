// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './h3.css';

type Props = {
  children?: ReactChildren,
  className: string,
  secondary: boolean,
};

const H3 = ({ className = '', secondary = false, children }: Props) => (
  <h3
    className={classnames(className, styles.h3, {
      [styles.secondary]: secondary,
    })}
  >
    {children}
  </h3>
);

export default H3;
export { styles };
