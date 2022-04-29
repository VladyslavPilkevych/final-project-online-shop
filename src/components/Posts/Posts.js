/* eslint-disable max-len */
import React from 'react';
import styles from './Posts.module.scss';
import instagramImage1 from '../../assets/icons/instagram-images/instagram-image1.png';
import instagramImage2 from '../../assets/icons/instagram-images/instagram-image2.png';
import instagramImage3 from '../../assets/icons/instagram-images/instagram-image3.png';
import instagramImage4 from '../../assets/icons/instagram-images/instagram-image4.png';
import instagramImage5 from '../../assets/icons/instagram-images/instagram-image5.png';
import instagramImage6 from '../../assets/icons/instagram-images/instagram-image6.png';
import instagramImage7 from '../../assets/icons/instagram-images/instagram-image7.png';
import instagramImage8 from '../../assets/icons/instagram-images/instagram-image8.png';
import instagramImage9 from '../../assets/icons/instagram-images/instagram-image9.png';

function Posts() {
  return (
    <div className={styles.posts}>
      <h1 className={styles.postsArticle}>Follow us on Instagram for News, Offers & More</h1>
      <div className={styles.postsWrapper}>
        <div className={styles.postItem}>
          <img src={instagramImage1} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage2} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage3} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage4} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage5} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage6} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage7} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage8} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>
        <div className={styles.postItem}>
          <img src={instagramImage9} className="post-image" alt="post-img" />
          <p className={styles.postText}>If you’ve recently made a desktop PC or laptop purchase, you might want to consider adding peripherals to enhance your home office setup, your gaming rig, or your business workspace...</p>
          <p className={styles.postDate}>01.09.2020</p>
        </div>

      </div>
    </div>
  );
}

export default Posts;
