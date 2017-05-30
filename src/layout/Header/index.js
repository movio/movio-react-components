import React from 'react';

import Logo from '../../components/Logo';

import styles from './header.css';

const Header = () => (
  <div className={styles.container}>
    <Logo className={styles.logo} />
  </div>
);

export default Header;
