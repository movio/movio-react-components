// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './p.css';

type Props = {
  className?: string,
  children?: ReactChildren,
};

const P = ({ className = '', children }: Props) => (
  <p className={classnames(className, styles.p)}>
    {children}
  </p>
);

export default P;
export { styles };
