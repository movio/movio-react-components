import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './code.css';

const Code = ({ className, code }) =>
  <pre className={classnames(className, styles.container)}>
    <code className={styles.code}>
      {code}
    </code>
  </pre>;

Code.propTypes = {
  className: PropTypes.string,
  code: PropTypes.string.isRequired,
};


export default Code;
export {
  styles,
};
