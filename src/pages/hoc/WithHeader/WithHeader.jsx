import React from 'react';
import Header from '../../../components/modules/Header/Header';
import styles from './WithHeader.module.css';

/**
 * WithHeader is an HOC where it injects a Page into a container with Header
 */
const WithHeader = (Page) => {
  return ({ currentUser }) => {
    const { username } = currentUser;
    return (
      <div className={styles.container}>
        <Header username={username} isSticky={true} />
        <Page currentUser={currentUser} />
      </div>
    );
  };
};

export default WithHeader;
