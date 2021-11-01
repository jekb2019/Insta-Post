import React from 'react';
import PropTypes from 'prop-types';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import styles from './MiniProfile.module.css';

const MiniProfile = ({ username, location, image, onClick }) => (
  <div className={styles.container} onClick={onClick}>
    <ProfileImg size="medium" borderColor="gray" image={image} />
    <div className={styles.descriptions}>
      <p className={styles.description}>{username}</p>
      {location && (
        <p className={`${styles.description} ${styles.location}`}>{location}</p>
      )}
    </div>
  </div>
);

MiniProfile.propTypes = {
  username: PropTypes.string,
  image: PropTypes.string,
};

export default MiniProfile;
