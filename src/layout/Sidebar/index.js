import React, { PropTypes } from 'react';

import styles from './sidebar.css';

const handleSideBarClick = () => {};

const renderSidebarItems = items =>
  items.map(item => (
    <li key={item} className={styles.listItem}>
      <button className={styles.btn} onClick={() => handleSideBarClick(item)}>
        {item}
      </button>
    </li>
  ));

const Sidebar = ({ items }) => (
  <div className={styles.container}>
    <ul className={styles.list}>
      {renderSidebarItems(items)}
    </ul>
  </div>
);

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

Sidebar.defaultProps = {
  items: [],
};

export default Sidebar;
