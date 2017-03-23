// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './h1.css';

type Props = {
  className?: string,
  children?: ReactChildren,
}

const H1 = ({ className = '', children }: Props) =>
  <h1 className={classnames(className, styles.h1)}>
    {children}
  </h1>;

export default H1;
export {
  styles,
};

