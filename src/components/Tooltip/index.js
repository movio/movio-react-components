import React, { PropTypes } from 'react';
import classnames from 'classnames';

import styles from './tooltip.css';

const Tooltip = ({ className, children }) => (
  <div className={classnames(className, styles.container)}>
    {children}
  </div>
);

Tooltip.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  className: null,
};

export default Tooltip;
export { styles };
