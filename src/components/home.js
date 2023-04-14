import React from 'react';
import styles from '@/styles/homes.module.scss';
import Image from 'next/image';

function Home() {
  return (
    <section className={styles.homes}>
      <div className={styles.home}>
        <Image
          width={500}
          height={500}
          className={styles.home__img}
          src='/img/house-1.jpeg'
          alt='House 1'
        />

        <svg className={styles.home__like}>
          <use xlinkHref='/img/sprite.svg#icon-heart-full'></use>
        </svg>
        <h5 className={styles.home__name}>Beautiful Familiy House</h5>
        <div className={styles.home__location}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>USA</p>
        </div>
        <div className={styles.home__rooms}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-profile-male'></use>
          </svg>
          <p>5 rooms</p>
        </div>
        <div className={styles.home__area}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-expand'></use>
          </svg>
          <p>
            325 m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-key'></use>
          </svg>
          <p>$1,200,000</p>
        </div>
        <button className={`btn ${styles.home__btn}`}>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <Image
          width={500}
          height={500}
          src='/img/house-2.jpeg'
          alt='House 2'
          className={styles.home__img}
        />
        <svg className={styles.home__like}>
          <use xlinkHref='/img/sprite.svg#icon-heart-full'></use>
        </svg>
        <h5 className={styles.home__name}>Modern Glass Villa</h5>
        <div className={styles.home__location}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>Canada</p>
        </div>
        <div className={styles.home__rooms}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-profile-male'></use>
          </svg>
          <p>6 rooms</p>
        </div>
        <div className={styles.home__area}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-expand'></use>
          </svg>
          <p>
            450 m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-key'></use>
          </svg>
          <p>$2,750,000</p>
        </div>
        <button className={`btn ${styles.home__btn}`}>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <Image
          width={500}
          height={500}
          src='/img/house-3.jpeg'
          alt='House 3'
          className={styles.home__img}
        />
        <svg className={styles.home__like}>
          <use xlinkHref='/img/sprite.svg#icon-heart-full'></use>
        </svg>
        <h5 className={styles.home__name}>Cozy Country House</h5>
        <div className={styles.home__location}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>UK</p>
        </div>
        <div className={styles.home__rooms}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-profile-male'></use>
          </svg>
          <p>4 rooms</p>
        </div>
        <div className={styles.home__area}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-expand'></use>
          </svg>
          <p>
            250 m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-key'></use>
          </svg>
          <p>$850,000</p>
        </div>
        <button className={`btn ${styles.home__btn}`}>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <Image
          width={500}
          height={500}
          src='/img/house-4.jpeg'
          alt='House 4'
          className={styles.home__img}
        />
        <svg className={styles.home__like}>
          <use xlinkHref='/img/sprite.svg#icon-heart-full'></use>
        </svg>
        <h5 className={styles.home__name}>Large Rustical Villa</h5>
        <div className={styles.home__location}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>Portugal</p>
        </div>
        <div className={styles.home__rooms}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-profile-male'></use>
          </svg>
          <p>6 rooms</p>
        </div>
        <div className={styles.home__area}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-expand'></use>
          </svg>
          <p>
            480 m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-key'></use>
          </svg>
          <p>$1,950,000</p>
        </div>
        <button className={`btn ${styles.home__btn}`}>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <Image
          width={500}
          height={500}
          src='/img/house-5.jpeg'
          alt='House 5'
          className={styles.home__img}
        />

        <svg className={styles.home__like}>
          <use xlinkHref='/img/sprite.svg#icon-heart-full'></use>
        </svg>
        <h5 className={styles.home__name}>Majestic Palace House</h5>
        <div className={styles.home__location}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>Germany</p>
        </div>
        <div className={styles.home__rooms}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-profile-male'></use>
          </svg>
          <p>18 rooms</p>
        </div>
        <div className={styles.home__area}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-expand'></use>
          </svg>
          <p>
            4230 m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-key'></use>
          </svg>
          <p>$9,500,000</p>
        </div>
        <button className={`btn ${styles.home__btn}`}>Contact realtor</button>
      </div>

      <div className={styles.home}>
        <Image
          width={500}
          height={500}
          src='/img/house-6.jpeg'
          alt='House 6'
          className={styles.home__img}
        />
        <svg className={styles.home__like}>
          <use xlinkHref='/img/sprite.svg#icon-heart-full'></use>
        </svg>
        <h5 className={styles.home__name}>Modern Familiy Apartment</h5>
        <div className={styles.home__location}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-map-pin'></use>
          </svg>
          <p>Italy</p>
        </div>
        <div className={styles.home__rooms}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-profile-male'></use>
          </svg>
          <p>3 rooms</p>
        </div>
        <div className={styles.home__area}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-expand'></use>
          </svg>
          <p>
            180 m<sup>2</sup>
          </p>
        </div>
        <div className={styles.home__price}>
          <svg>
            <use xlinkHref='/img/sprite.svg#icon-key'></use>
          </svg>
          <p>$600,000</p>
        </div>
        <button className={`btn ${styles.home__btn}`}>Contact realtor</button>
      </div>
    </section>
  );
}

export default Home;
