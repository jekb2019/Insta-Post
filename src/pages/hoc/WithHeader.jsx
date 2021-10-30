import React from 'react';
import Header from '../../components/modules/Header/Header';

/**
 * WithHeader is an HOC where it injects Header into a Page
 */
const WithHeader = (Page) => {
  return () => (
    <>
      <Header />
      <Page />
    </>
  );
};

export default WithHeader;
