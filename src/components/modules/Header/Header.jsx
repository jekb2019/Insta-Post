import React from 'react';
import styles from './Header.module.css';
import logo from '../../../assets/images/header_logo.png';
import SearchBar from '../../elements/SearchBar/SearchBar';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';

const Header = ({ name }) => (
  <header className={styles.container}>
    <div className={styles.inner_container}>
      <img className={styles.logo} src={logo} alt="InstaPost logo" />
      <SearchBar />
      <div className={styles.user}>
        <p className={styles.name}>{name}</p>
        <ProfileImg borderColor="gray" size="medium" />
      </div>
    </div>
  </header>
);

export default Header;
