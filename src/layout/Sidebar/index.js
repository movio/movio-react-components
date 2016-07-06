import React, { PropTypes } from 'react';

import styles from './sidebar.css';

const handleSideBarClick = () => {};

const renderSidebarItems = (items) =>
  items.map(item =>
    <li key={item} className={styles.listItem} onClick={() => handleSideBarClick(item)}>{item}</li>
  );

const Sidebar = ({ items }) =>
  <div className={styles.container}>
    <ul className={styles.list}>
      {renderSidebarItems(items)}
    </ul>
  </div>;

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default Sidebar;
