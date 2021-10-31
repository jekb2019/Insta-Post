import React from 'react';
import Header from '../../../components/modules/Header/Header';
import styles from './WithHeader.module.css';

/**
 * WithHeader is an HOC where it injects Header into a Page
 */
const WithHeader = (Page) => {
  return () => (
    <div className={styles.container}>
      <Header name="Jason Ko" />
      <Page />
    </div>
  );
};

export default WithHeader;
