import React, { PropTypes } from 'react';

import styles from './content.css';

const Content = ({ children }) =>
  <div className={styles.container}>
    {children}
  </div>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
