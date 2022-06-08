import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button(props) {
  const {
    children, handleClick, type, className, style,
  } = props;

  return (
    /* eslint-disable react/button-has-type */
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.btn} ${className}`}
      style={style}
    >
      {children}
    </button>
    /* eslint-enable react/button-has-type */
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.oneOf(['submit', 'button']),
  handleClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  children: '',
  type: 'button',
  handleClick: () => { },
  className: '',
  style: {},
};

export default memo(Button);
