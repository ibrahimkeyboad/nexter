import React from 'react';
import styles from '@/styles/sidebar.module.scss';

function SideBar() {
  return (
    <div class={styles.sidebar}>
      <button class={styles['nav-btn']}></button>
    </div>
  );
}

export default SideBar;
