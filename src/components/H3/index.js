// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './h3.css';

type Props = {
  children?: ReactChildren,
  className?: string,
};

const H3 = ({ className, children }: Props) => (
  <h3 className={classnames(className, styles.h3)}>
    {children}
  </h3>
);

export default H3;
export { styles };
