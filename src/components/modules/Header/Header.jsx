import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import logo from '../../../assets/images/header_logo.png';
import SearchBar from '../../elements/SearchBar/SearchBar';
import ProfileImg from '../../elements/ProfileImg/ProfileImg';
import ProfileNav from '../ProfileNav/ProfileNav';
import { useHistory } from 'react-router';

const Header = ({ name, username, profileImg, isSticky }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // -- 여기 route 관련 코드 있는게 좋은걸까? //
  const history = useHistory();

  const handleLogoClick = () => {
    history.push('/home');
  };

  const navItemConfigs = useMemo(
    () => [
      {
        label: 'My Page',
        onClick: () => history.push(`/user/${username}`),
      },
      {
        label: 'Log out',
        onClick: () => history.push('/login'),
      },
    ],
    [history]
  );

  return (
    <header className={`${styles.container} ${isSticky && styles.sticky}`}>
      <div className={styles.inner_container}>
        <img
          className={styles.logo}
          src={logo}
          alt="InstaPost logo"
          onClick={handleLogoClick}
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
