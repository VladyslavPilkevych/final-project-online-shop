import React, { memo } from 'react';

import PropTypes from 'prop-types';

function Button(props) {
  const {
    children, handleClick, type, style, className,
  } = props;

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${className} ${style}`}
      style={style}
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
