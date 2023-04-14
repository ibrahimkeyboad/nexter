import React from 'react';
import styles from '@/styles/header.module.scss';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <Image
        width={200}
        height={200}
        src='/img/logo.png'
        alt='Nexter logo'
        className={styles.header__logo}
      />
      <h3 className='heading-3'>Your own home:</h3>
      <h1 className='heading-1'>The ultimate personal freedom</h1>
      <button className={`btn ${styles.header__btn}`}>
        View our properties
      </button>
      <div className={styles['header__seenon-text']}>Seen on</div>
      <div className={styles['header__seenon-logos']}>
        <Image
          width={100}
          height={100}
          src='/img/logo-bbc.png'
          alt='Seen on logo 1'
        />
        <Image
          width={100}
          height={100}
          src='/img/logo-forbes.png'
          alt='Seen on logo 2'
        />
        <Image
          width={200}
          height={200}
          src='/img/logo-techcrunch.png'
          alt='Seen on logo 3'
        />
        <Image
          width={80}
          height={100}
          src='/img/logo-bi.png'
          alt='Seen on logo 4'
        />
      </div>
    </header>
  );
}

export default Header;
