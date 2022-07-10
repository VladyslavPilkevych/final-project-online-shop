import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button(props) {
  const {
    children, handleClick, type, style, className,
  } = props;

  const user = useSelector((state) => state.user.user);
  const disable = Boolean(user);

  return (
    /* eslint-disable react/button-has-type */
    <button
      type={type}
      onClick={handleClick}
      className={`${className} ${style}`}
      style={style}
      // disable={!disable}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.oneOf(['submit', 'button']),
  handleClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  type: 'button',
  handleClick: () => {},
  style: {},
  className: '',
};

export default memo(Button);
