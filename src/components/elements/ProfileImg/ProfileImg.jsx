import React from 'react';
import styles from './ProfileImg.module.css';
import testImg from '../../../assets/images/mockProfile.jpg';
import PropTypes from 'prop-types';

const ProfileImg = ({ size, borderColor }) => {
  return (
    <div
      className={`${styles.container} ${styles[size]} ${
        styles[`border_${borderColor}`]
      }`}
    >
      <img className={`${styles.img}`} src={testImg} alt="User profile" />
    </div>
  );
};

ProfileImg.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  borderColor: PropTypes.oneOf(['gray', 'red']),
};

export default ProfileImg;
