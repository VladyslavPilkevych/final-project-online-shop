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
  useEffect(() => {
    if (newErrorFromRedux) {
      setShowError(true);
    }
  }, [newErrorFromRedux]);
  const reloadPage = () => {
    window.location.reload();
    setShowError(false);
  };
  const goToHomePage = () => {
    navigate({
      pathname: '/',
    });
    reloadPage();
    setShowError(false);
  };
  return (
    <div>
      {showError
        && (
          <div className={styles.errorWrapper}>
            <h1 className={styles.errorMainText}>
              Sorry, there are some problems with our server.
            </h1>
            <h2 className={styles.errorMessage}>
              Error message:
              {' '}
              {newErrorFromRedux.message}
            </h2>
            <img className={styles.errorImage} src={serverErrImg} alt="serverErrImg" />
            <div className={styles.errorBtns}>
              <Button className={styles.errorBtn} handleClick={goToHomePage}>
                Return to Home page
              </Button>
              <Button className={styles.errorBtn} handleClick={reloadPage}>
                Reload this page
              </Button>
            </div>
          </div>
        )}
    </div>
  );
}

export default ErrorBoundary;