import React from 'react';
import styles from '@/styles/footer.module.scss';

function Footer() {
  return (
    <footer class={styles.footer}>
      <ul class={styles.nav}>
        <li class={styles.nav__item}>
          <a href='#' class={styles.nav__link}>
            Find your dream home
          </a>
        </li>
        <li class={styles.nav__item}>
          <a href='#' class={styles.nav__link}>
            Request proposal
          </a>
        </li>
        <li class={styles.nav__item}>
          <a href='#' class={styles.nav__link}>
            Download home planner
          </a>
        </li>
        <li class={styles.nav__item}>
          <a href='#' class={styles.nav__link}>
            Contact us
          </a>
        </li>
        <li class={styles.nav__item}>
          <a href='#' class={styles.nav__link}>
            Submit your property
          </a>
        </li>
        <li class={styles.nav__item}>
          <a href='#' class={styles.nav__link}>
            Come work with us!
          </a>
        </li>
      </ul>
      <p class={styles.copyright}>
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this
        project for your own purposes. This does NOT apply if you plan to
        produce your own course or tutorials based on this project.
      </p>
    </footer>
  );
}

export default Footer;
