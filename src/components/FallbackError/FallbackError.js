import React from 'react';
import PropTypes from 'prop-types';
import styles from './FallbackError.module.scss';
import cryingEmoji from '../../assets/icons/crying-emoji.png';

export function FallbackError({ error, resetErrorBoundary }) {
  return (
    <div className={styles.errorWrapper}>
      <h1 className={styles.errorMainText}>Sorry an error occured:</h1>
      <pre>{error.message}</pre>
      <img className={styles.errorImage} src={cryingEmoji} alt="crying-emoji" />
      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}

FallbackError.propTypes = {
  error: PropTypes.object,
  resetErrorBoundary: PropTypes.func.isRequired,
};
FallbackError.defaultProps = {
  error: {},
};
