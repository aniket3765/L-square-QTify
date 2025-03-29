import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './MusicList.module.css';
import Song from '../Song/Song';

const MusicList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top'); // Replace with actual API URL
        setAlbums(response.data);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <div className={styles.musicListContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Top Albums</h2>
        <p className={styles.showAll}>Show all</p>
      </div>
      <div className={styles.albumList}>
        {albums.map((album) => (
          <div key={album.id} className={styles.albumContainer}>
            <img src={album.image} alt={album.title} className={styles.albumImage} />
            <h3 className={styles.albumTitle}>{album.title}</h3>
            <p className={styles.albumFollows}>{album.follows} follows</p>
            <div className={styles.songList}>
              {album.songs.map((song) => (
                <Song key={song.id} song={song} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;