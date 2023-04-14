import React from 'react';
import styles from '@/styles/gallery.module.scss';
import Image from 'next/image';

function Gallery() {
  return (
    <section className={styles.gallery}>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--1']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-1.jpeg'
          alt='Gallery image 1'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--2']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-2.jpeg'
          alt='Gallery image 2'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--3']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-3.jpeg'
          alt='Gallery image 3'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--4']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-4.jpeg'
          alt='Gallery image 4'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--5']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-5.jpeg'
          alt='Gallery image 5'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--6']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-6.jpeg'
          alt='Gallery image 6'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--7']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-7.jpeg'
          alt='Gallery image 7'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--8']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-8.jpeg'
          alt='Gallery image 8'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--9']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-9.jpeg'
          alt='Gallery image 9'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--10']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-10.jpeg'
          alt='Gallery image 10'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--11']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-11.jpeg'
          alt='Gallery image 11'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--12']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-12.jpeg'
          alt='Gallery image 12'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--13']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-13.jpeg'
          alt='Gallery image 13'
          className={styles.gallery__img}
        />
      </figure>
      <figure
        className={`${styles.gallery__item} ${styles['gallery__item--14']}`}>
        <Image
          width={700}
          height={500}
          src='/img/gal-14.jpeg'
          alt='Gallery image 14'
          className={styles.gallery__img}
        />
      </figure>
    </section>
  );
}

export default Gallery;
