import React from 'react';
import styles from './ProfileNavItem.module.css';

const ProfileNavItem = ({ label, onClick }) => (
  <li onClick={onClick} className={styles.item}>
    <span className={styles.label}>{label}</span>
  </li>
);

export default ProfileNavItem;
