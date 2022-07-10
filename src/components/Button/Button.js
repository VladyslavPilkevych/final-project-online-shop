import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button(props) {
  const {
    children, onClick, type, style, className,
  } = props;

  const user = useSelector((state) => state.user.user);
  const disable = Boolean(user);

  return (
    /* eslint-disable react/button-has-type */
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${style}`}
      // disable={!disable}
    >
      {children}
    </button>
    /* eslint-enable react/button-has-type */
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func,
  style: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  children: '',
  type: 'button',
  onClick: () => {},
  style: '',
  className: '',
};

export default memo(Button);
