import React from 'react';
import styles from '@/styles/realtors.module.scss';

function Realtors() {
  return (
    <div className={styles.realtors}>
      <h3 className='heading-3'>Top 3 Realtors</h3>
      <div className={styles.realtors__list}>
        <img
          src='/img/realtor-1.jpeg'
          alt='Realtor 1'
          className={styles.realtors__img}
        />
        <div className={styles.realtors__detail}>
          <h4 className='heading-4 heading-4--light'>Erik Feinman</h4>
          <p className={styles.realtors__sold}>245 houses sold</p>
        </div>

        <img
          src='/img/realtor-2.jpeg'
          alt='Realtor 2'
          className={styles.realtors__img}
        />
        <div className={styles.realtors__details}>
          <h4 className='heading-4 heading-4--light'>Kim Brown</h4>
          <p className={styles.realtors__sold}>212 houses sold</p>
        </div>

        <img
          src='/img/realtor-3.jpeg'
          alt='Realtor 3'
          className={styles.realtors__img}
        />
        <div className={styles.realtors__details}>
          <h4 className='heading-4 heading-4--light'>Toby Ramsey</h4>
          <p className={styles.realtors__sold}>198 houses sold</p>
        </div>
      </div>
    </div>
  );
}

export default Realtors;
