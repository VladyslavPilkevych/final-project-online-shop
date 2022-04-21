import React from 'react';
import { useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './CustomInput.module.scss';

function CustomInput(props) {
  const { type, placeholder } = props;

  const [field, meta, helpers] = useField(props);
  const { error, touched } = meta;
  //   console.log(field, meta);
  return (
    <>
      <input {...field} type={type} placeholder={placeholder} className={styles.customInput} />
      {error ? <p className={styles.error}>{touched && error}</p> : ''}
    </>
  );
}

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
CustomInput.defaultProps = {
  type: '',
  placeholder: '',
};

export default CustomInput;
