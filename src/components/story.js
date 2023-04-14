import React from 'react';

import styles from '@/styles/story.module.scss';
import Image from 'next/image';

function StoryTell() {
  return (
    <>
      <div className={styles.story__pictures}>
        <Image
          width={500}
          height={500}
          src='/img/story-1.jpeg'
          alt='Couple with new house'
          className={styles['story__img--1']}
        />
        <Image
          width={500}
          height={270}
          src='/img/story-2.jpeg'
          alt='New house'
          className={styles['story__img--2']}
        />
      </div>

      <div className={styles.story__content}>
        <h3 className='heading-3 mb-sm'>Happy Customers</h3>
        <h2 className='heading-2 heading-2--dark mb-md'>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p className={styles.story__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button className='btn'>Find your own home</button>
      </div>
    </>
  );
}

export default StoryTell;
