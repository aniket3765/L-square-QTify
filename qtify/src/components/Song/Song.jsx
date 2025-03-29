import React from 'react';
import styles from './Song.module.css';

const Song = ({ song }) => {
  return (
    <div className={styles.songCard}>
      <div className={styles.imageContainer}>
        <img src={song.image} alt={song.title} className={styles.image} />
        <div className={styles.follows}>
          <span>{song.follows} Follows</span>
        </div>
      </div>
      <p className={styles.songTitle}>{song.title}</p>
    </div>
  );
};

export default Song;