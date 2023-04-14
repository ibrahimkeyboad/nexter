import React from 'react';

import styles from '@/styles/story.module.scss';

function StoryTell() {
  return (
    <>
      <div class={styles.story__pictures}>
        <img
          src='img/story-1.jpeg'
          alt='Couple with new house'
          class={styles['story__img--1']}
        />
        <img
          src='img/story-2.jpeg'
          alt='New house'
          class={styles['story__img--2']}
        />
      </div>

      <div class={styles.story__content}>
        <h3 class='heading-3 mb-sm'>Happy Customers</h3>
        <h2 class='heading-2 heading-2--dark mb-md'>
          &ldquo;The best decision of our lives&rdquo;
        </h2>
        <p class={styles.story__text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
          harum volupta!
        </p>
        <button class='btn'>Find your own home</button>
      </div>
    </>
  );
}

export default StoryTell;
