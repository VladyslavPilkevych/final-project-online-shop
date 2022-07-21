import React from 'react';

import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastNotification({
  closeOnClick,
  pauseOnFocusLoss,
  pauseOnHover,
  className,
  rtl,
  close,
  theme,
  width,
  position,
  hideBar,
  color,
  background,
}) {
  return (
    <ToastContainer
      className={className}
      rtl={rtl}
      theme={theme}
      closeButton={close}
      pauseOnHover={pauseOnHover && false}
      style={{ width }}
      toastStyle={{ background, color }}
      position={position}
      autoClose={2000}
      hideProgressBar={hideBar}
      closeOnClick={closeOnClick}
      pauseOnFocusLoss={pauseOnFocusLoss}
    />
  );
}

ToastNotification.propTypes = {
  closeOnClick: PropTypes.bool,
  pauseOnFocusLoss: PropTypes.bool,
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
  rtl: PropTypes.bool,
  close: PropTypes.bool,
  theme: PropTypes.string,
  width: PropTypes.string,
  position: PropTypes.string,
  hideBar: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string,
};

ToastNotification.defaultProps = {
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  className: '',
  rtl: true,
  close: true,
  theme: 'light',
  width: '100%',
  position: 'top-center',
  hideBar: false,
  color: '',
  background: '',
};
