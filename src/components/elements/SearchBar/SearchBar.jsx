import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import useInput from '../../../hooks/useInput';
import styles from './SearchBar.module.css';

// TODO: Refactor business logic into hook

const SearchBar = () => {
  const searchInput = useInput('');

  const handleSearch = () => {
    console.log('Search: ', searchInput.value);
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" {...searchInput} />
      <button className={styles.btn} onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
