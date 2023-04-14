import React from 'react';
import styles from '@/styles/features.module.scss';

function Feature() {
  return (
    <section className={styles.features}>
      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref='img/sprite.svg#icon-global'></use>
        </svg>
        <h4 className='heading-4 heading-4--dark'>{`World's best luxury homes`}</h4>
        <p className={styles.feature__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref='img/sprite.svg#icon-trophy'></use>
        </svg>
        <h4 className='heading-4 heading-4--dark'>Only the best properties</h4>
        <p className={styles.feature__text}>
          Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
          rerum sed a eligendi aut quia.
        </p>
      </div>

      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref='img/sprite.svg#icon-map-pin'></use>
        </svg>
        <h4 className='heading-4 heading-4--dark'>All homes in in top locations</h4>
        <p className={styles.feature__text}>
          Tenetur distinctio necessitatibus pariatur voluptatibus quidem
          consequatur harum.
        </p>
      </div>

      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref='img/sprite.svg#icon-key'></use>
        </svg>
        <h4 className='heading-4 heading-4--dark'>New home in one week</h4>
        <p className={styles.feature__text}>
          Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit.
        </p>
      </div>

      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref='img/sprite.svg#icon-presentation'></use>
        </svg>
        <h4 className='heading-4 heading-4--dark'>Top 1% realtors</h4>
        <p className={styles.feature__text}>
          Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
          necessitatibus pariatur voluptatibus.
        </p>
      </div>

      <div className={styles.feature}>
        <svg className={styles.feature__icon}>
          <use xlinkHref='img/sprite.svg#icon-lock'></use>
        </svg>
        <h4 className='heading-4 heading-4--dark'>Secure payments on nexter</h4>
        <p className={styles.feature__text}>
          Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
          quae.
        </p>
      </div>
    </section>
  );
}

export default Feature;
