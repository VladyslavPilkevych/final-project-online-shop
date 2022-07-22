import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ErrorBoundary.module.scss';
import serverErrImg from '../../assets/images/ErrorBoundary/serverErr.jpg';
import Button from '../Button/Button';

function ErrorBoundary() {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);
  const newErrorFromRedux = useSelector((state) => state.products.errorBoundaryString);
  console.log(newErrorFromRedux);
  useEffect(() => {
    if (newErrorFromRedux) {
      setShowError(true);
    }
  }, [newErrorFromRedux]);
  const reloadPage = () => window.location.reload();
  const goToHomePage = () => {
    navigate({
      pathname: '/',
    });
    reloadPage();
  };
  return (
    <div>
      {showError
        && (
          <div className={styles.errorWrapper}>
            <h1 className={styles.errorMainText}>Sorry, there are some problems with server.</h1>
            <h2 className={styles.errorMessage}>
              Error message:
              {' '}
              {newErrorFromRedux.message}
            </h2>
            <img className={styles.errorImage} src={serverErrImg} alt="crying-emoji" />
            <div className={styles.errorBtns}>
              {/* <NavLink className={styles.navLinksLogo} to="/">
                <LogoIcon className={styles.logo} role="button" tabIndex="0" />
              </NavLink> */}
              <Button className={styles.errorBtn} handleClick={goToHomePage}>
                Return to Home page
              </Button>
              <Button className={styles.errorBtn} handleClick={reloadPage}>
                Reload page
              </Button>
            </div>
          </div>
        )}
    </div>
  );
}

export default ErrorBoundary;