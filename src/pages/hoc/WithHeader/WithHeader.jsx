import React from 'react';
import Header from '../../../components/modules/Header/Header';
import currentUser from '../../../mock/user';
import styles from './WithHeader.module.css';

/**
 * WithHeader is an HOC where it injects Header into a Page
 */
const WithHeader = (Page) => {
  const { id, username, name, profileImg } = currentUser;
  return () => (
    <div className={styles.container}>
      <Header name={name} profileImg={profileImg} isSticky={true} />
      <Page />
    </div>
  );
};

export default WithHeader;
