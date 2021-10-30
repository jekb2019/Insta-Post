import React from 'react';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import styles from './MiniProfile.module.css';

const MiniProfile = ({ username, location }) => (
  <div className={styles.container}>
    <ProfileImg size="small" borderColor="gray" />
    <div className={styles.descriptions}>
      <p className={styles.description}>{username}</p>
      {location && (
        <p className={`${styles.description} ${styles.location}`}>{location}</p>
      )}
    </div>
  </div>
);

export default MiniProfile;
