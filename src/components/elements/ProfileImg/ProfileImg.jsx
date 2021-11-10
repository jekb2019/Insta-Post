import React from 'react';
import styles from './ProfileImg.module.css';
import PropTypes from 'prop-types';
import defaultProfileImg from '../../../assets/images/default_profile.png';
const ProfileImg = ({ size, borderColor, image }) => {
  return (
    <div
      className={`${styles.container} ${styles[size]} ${
        styles[`border_${borderColor}`]
      }`}
    >
      <img
        className={`${styles.img}`}
        src={image ?? defaultProfileImg}
        alt="User profile"
      />
    </div>
  );
};

ProfileImg.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderColor: PropTypes.oneOf(['gray', 'red']),
  image: PropTypes.string,
};

export default ProfileImg;
