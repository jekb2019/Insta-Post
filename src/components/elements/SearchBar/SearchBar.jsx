import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './SearchBar.module.css';

// TODO: useInput hook

const SearchBar = () => (
  <div className={styles.container}>
    <input className={styles.input} type="text" />
    <button className={styles.btn}>
      <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>
);

export default SearchBar;
