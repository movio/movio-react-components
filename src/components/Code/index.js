// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './code.css';

type Props = {
  className?: string,
  code: ReactChildren,
};

const Code = ({ className = '', code }: Props) => (
  <pre className={classnames(className, styles.container)}>
    <code className={styles.code}>
      {code}
    </code>
  </pre>
);

export default Code;
export { styles };
