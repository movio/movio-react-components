// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './h2.css';

type Props = {
  children?: ReactChildren,
  className?: string,
};

const H2 = ({ className, children }: Props) => (
  <h2 className={classnames(className, styles.h2)}>
    {children}
  </h2>
);

export default H2;
export { styles };
