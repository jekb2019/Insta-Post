import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProfileNav.module.css';
import ProfileNavItem from '../../elements/ProfileNavItem/ProfileNavItem';

const ProfileNav = ({ itemConfigs }) => (
  <nav className={styles.container}>
    <ul>
      {itemConfigs.map((config) => {
        const { label, onClick } = config;
        return <ProfileNavItem key={label} label={label} onClick={onClick} />;
      })}
    </ul>
  </nav>
);

ProfileNav.propTypes = {
  itemConfigs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      onClick: PropTypes.func,
    })
  ),
};

export default ProfileNav;
