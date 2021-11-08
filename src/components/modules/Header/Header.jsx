import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../../../assets/images/header_logo.png';
import SearchBar from '../../elements/SearchBar/SearchBar';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import ProfileNav from '../ProfileNav/ProfileNav';
import useNav from '../../../hooks/useNav';
import useHeader from '../../../hooks/useHeader';

const Header = ({ name, username, profileImg, isSticky }) => {
  const [isNavOpen, toggleNav, navItemConfigs] = useNav(username);
  const [redirectTOHome] = useHeader();

  return (
    <header className={`${styles.container} ${isSticky && styles.sticky}`}>
      <div className={styles.inner_container}>
        <img
          className={styles.logo}
          src={logo}
          alt="InstaPost logo"
          onClick={redirectTOHome}
        />
        <SearchBar />
        <div className={styles.user} onClick={toggleNav}>
          <p className={styles.name}>{name}</p>
          <ProfileImg borderColor="gray" size="medium" image={profileImg} />
          {isNavOpen && (
            <div className={styles.nav_container}>
              <ProfileNav itemConfigs={navItemConfigs} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  username: PropTypes.string,
  name: PropTypes.string,
  profileImg: PropTypes.string,
  isSticky: PropTypes.bool,
};

export default Header;
