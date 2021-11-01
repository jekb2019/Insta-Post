import React from 'react';
import PropTypes from 'prop-types';
import styles from './BasicButton.module.css';

const BasicButton = ({ size, label, onClick, backgroundColor, color }) => {
  return (
    <button
      onClick={onClick}
      className={`
          ${styles.btn} 
          ${styles[`background_${backgroundColor}`]}
          ${styles[color]}
          ${styles[size]}
        `}
    >
      {label}
    </button>
  );
};

BasicButton.propTyles = {
  size: PropTypes.oneOf(['small']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.oneOf(['red', 'green', 'orange']),
  color: PropTypes.oneOf(['white']),
};

export default BasicButton;
