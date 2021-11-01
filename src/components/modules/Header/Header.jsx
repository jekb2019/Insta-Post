import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../../../assets/images/header_logo.png';
import SearchBar from '../../elements/SearchBar/SearchBar';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import ProfileNav from '../ProfileNav/ProfileNav';

const navItemConfigs = [
  {
    label: 'My Page',
    onClick: () => console.log('My Page clicked'),
  },
  {
    label: 'Log out',
    onClick: () => console.log('Log out clicked'),
  },
];

const Header = ({ name, profileImg, isSticky }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`${styles.container} ${isSticky && styles.sticky}`}>
      <div className={styles.inner_container}>
        <img className={styles.logo} src={logo} alt="InstaPost logo" />
        <SearchBar />
        <div className={styles.user} onClick={toggleNav}>
          <p className={styles.name}>{name}</p>
          <ProfileImg borderColor="gray" size="medium" image={profileImg} />
        </div>
      </div>
      {isNavOpen && (
        <div className={styles.nav_container}>
          <ProfileNav itemConfigs={navItemConfigs} />
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
  isSticky: PropTypes.bool,
};

export default Header;
