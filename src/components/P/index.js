import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './p.css';

const P = ({ className, children }) => (
  <p className={classnames(className, styles.p)}>
    {children}
  </p>
);

P.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

P.defaultProps = {
  className: null,
};

export default P;
export { styles };
