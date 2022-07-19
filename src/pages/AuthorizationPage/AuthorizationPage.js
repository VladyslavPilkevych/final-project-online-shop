/* eslint-disable max-len */
import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomInput from '../../components/CustomInput/CustomInput';
import { logInCustomer } from '../../api/api';
import { setUserTokenAC, getUser } from '../../store/actionCreators/userAC';
import { ToastNotification } from '../../utils/toastify';
import styles from './AuthorizationPage.module.scss';

function AuthorizationPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    loginOrEmail: '',
    password: '',
  };

  const onSubmit = async (values, { resetForm }) => {
    const response = await logInCustomer(values)
      .then((user) => user)
<<<<<<< HEAD
      .catch((err) => console.error(err));
=======
      .catch(() => toast.error('Enter correct email or password'));
>>>>>>> b78ed9d15bd0c59c44e0beb969e29bec4b25c0a5
    if (response && response.status === 200) {
      resetForm();
      dispatch(setUserTokenAC(response.data.token));
      dispatch(getUser(response.data.token));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate({ pathname: '/' });
    }
  };

  const validationSchema = yup.object().shape({
    email: yup.string().email('It`s not looks like email').required('Required data'),
    password: yup.string().required('Required data').min(7, 'Password should be at least 7 characters'),
  });

  return (
    <div className={styles.authorizationPageWrapper}>
      <h1 className={styles.mainTitle}>Customer login</h1>
      <div className={styles.authorizationPageBlocksPageWrapper}>
        <div className={styles.authorizationBlockWrapper}>
          <h2 className={styles.customersBlocksTitle}>Registered Customers</h2>
          <p className={styles.customersBlocksSubtitle}>If you have an account, sign in with your login or email address</p>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
              <p className={styles.inputLabel}>Email*</p>
              <CustomInput name="email" type="text" placeholder="Email" />
              <p className={styles.inputLabel}>Password*</p>
              <CustomInput name="password" type="password" placeholder="Password" />
              <div>
                <button type="submit" className={styles.signInButton}>
                  Sign In
                </button>
              </div>
            </Form>
          </Formik>
        </div>
        <div className={`${styles.authorizationBlockWrapper} ${styles.signUpBlockWrapper}`}>
          <h2 className={styles.customersBlocksTitle}>New Customer?</h2>
          <p className={styles.customersBlocksSubtitle}>Creating an account has many benefits.</p>
          <ul className={styles.signUpBlockList}>
            <li>Check out faster</li>
            <li>Keep more than one address</li>
            <li>Track orders and more</li>
          </ul>
          <Link to="/sign-up">
            <button type="button" className={styles.signInButton}>
              Create an account
            </button>
          </Link>
        </div>
      </div>
      <ToastNotification position="top-right" hideBar close={false} theme="light" width="inherit" className="toast-container" />
    </div>
  );
}

export default memo(AuthorizationPage);
