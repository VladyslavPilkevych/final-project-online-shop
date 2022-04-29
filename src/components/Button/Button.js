import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button(props) {
  const {
    children, handleClick, type, style,
  } = props;

  return (
    /* eslint-disable react/button-has-type */
    <button type={type} onClick={handleClick} className={`${styles.btn} ${style}`}>
      {children}
    </button>
    /* eslint-enable react/button-has-type */
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  handleClick: PropTypes.func,
  style: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  handleClick: () => {},
  style: '',
};

export default memo(Button);
