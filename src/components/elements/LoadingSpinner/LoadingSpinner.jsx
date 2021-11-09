import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = (props) => (
  <div className={styles.container}>
    <div className={styles.spinner}></div>
  </div>
);

export default LoadingSpinner;
