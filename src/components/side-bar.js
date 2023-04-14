import React from 'react';
import styles from '@/styles/sidebar.module.scss';

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <button className={styles['nav-btn']}></button>
    </div>
  );
}

export default SideBar;
