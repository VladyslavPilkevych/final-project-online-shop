import React from 'react';
import PropTypes from 'prop-types';
import styles from './FallbackError.module.scss';

export function myErrorHandler({ error }) {
  alert('myErrorHandler');
  return (
    <div className={styles.errorWrapper}>
      <h1 className={styles.errorMainText}>Sorry an error occured:</h1>
    </div>
  );
}