import React from 'react';
import styles from './AddNewButton.module.css';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddNewButton = ({ size, color, onClick }) => (
  <button
    onClick={onClick}
    className={`${styles.btn} ${styles[size]} ${styles[color]}`}
  >
    <FontAwesomeIcon icon={faPlus} />
  </button>
);

AddNewButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.oneOf(['green', 'orange']),
};

export default AddNewButton;
