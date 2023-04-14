import React from 'react';
import styles from '@/styles/gallery.module.scss';

function Gallery() {
  return (
    <section class={styles.gallery}>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--1']}`}>
        <img
          src='img/gal-1.jpeg'
          alt='Gallery image 1'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--2']}`}>
        <img
          src='img/gal-2.jpeg'
          alt='Gallery image 2'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--3']}`}>
        <img
          src='img/gal-3.jpeg'
          alt='Gallery image 3'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--4']}`}>
        <img
          src='img/gal-4.jpeg'
          alt='Gallery image 4'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--5']}`}>
        <img
          src='img/gal-5.jpeg'
          alt='Gallery image 5'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--6']}`}>
        <img
          src='img/gal-6.jpeg'
          alt='Gallery image 6'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--7']}`}>
        <img
          src='img/gal-7.jpeg'
          alt='Gallery image 7'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--8']}`}>
        <img
          src='img/gal-8.jpeg'
          alt='Gallery image 8'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--9']}`}>
        <img
          src='img/gal-9.jpeg'
          alt='Gallery image 9'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--10']}`}>
        <img
          src='img/gal-10.jpeg'
          alt='Gallery image 10'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--11']}`}>
        <img
          src='img/gal-11.jpeg'
          alt='Gallery image 11'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--12']}`}>
        <img
          src='img/gal-12.jpeg'
          alt='Gallery image 12'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--13']}`}>
        <img
          src='img/gal-13.jpeg'
          alt='Gallery image 13'
          class={styles.gallery__img}
        />
      </figure>
      <figure class={`${styles.gallery__item} ${styles['gallery__item--14']}`}>
        <img
          src='img/gal-14.jpeg'
          alt='Gallery image 14'
          class={styles.gallery__img}
        />
      </figure>
    </section>
  );
}

export default Gallery;
