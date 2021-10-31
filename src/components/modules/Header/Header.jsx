import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../../../assets/images/header_logo.png';
import SearchBar from '../../elements/SearchBar/SearchBar';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';

const Header = ({ name, profileImg, isSticky }) => {
  return (
    <header className={`${styles.container} ${isSticky && styles.sticky}`}>
      <div className={styles.inner_container}>
        <img className={styles.logo} src={logo} alt="InstaPost logo" />
        <SearchBar />
        <div className={styles.user}>
          <p className={styles.name}>{name}</p>
          <ProfileImg borderColor="gray" size="medium" image={profileImg} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  isSticky: PropTypes.bool,
};

export default Header;
