import React from 'react';
import styles from './ProfileImg.module.css';
import testImg from '../../assets/images/mockProfile.jpg';

const ProfileImg = ({ size }) => (
  <div className={`${styles.container} ${styles[size]}`}>
    <img className={`${styles.img}`} src={testImg} />
  </div>
);

export default ProfileImg;
