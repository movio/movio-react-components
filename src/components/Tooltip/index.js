// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './tooltip.css';

type Props = {
  className?: string,
  children?: ReactChildren,
};

const Tooltip = ({ className, children }: Props) => (
  <div className={classnames(className, styles.container)}>
    {children}
  </div>
);

export default Tooltip;
export { styles };
