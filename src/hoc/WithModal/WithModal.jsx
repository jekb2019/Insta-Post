import React from 'react';
import styles from './WithModal.module.css';

const WithModal = (Content) => {
  return () => (
    <div className={styles.container}>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
};

export default WithModal;
