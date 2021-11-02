import React from 'react';
import Header from '../../../components/modules/Header/Header';
import styles from './WithHeader.module.css';

/**
 * WithHeader is an HOC where it injects Header into a Page
 */
const WithHeader = (Page) => {
  return ({ currentUser }) => {
    const { name, username, profileImg } = currentUser;
    return (
      <div className={styles.container}>
        <Header
          name={name}
          profileImg={profileImg}
          username={username}
          isSticky={true}
        />
        <Page />
      </div>
    );
  };
};

export default WithHeader;
