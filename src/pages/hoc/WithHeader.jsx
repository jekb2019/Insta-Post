import React from 'react';
import Header from '../../components/modules/Header/Header';

/**
 * WithHeader is an HOC where it injects Header into a Page
 */
const WithHeader = (Page) => {
  return () => (
    <>
      <Header name="Jason Ko" />
      <Page />
    </>
  );
};

export default WithHeader;
