/* eslint-disable max-len */
import React, { memo } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CustomInput from '../../components/CustomInput/CustomInput';
import { logInCustomer } from '../../api/api';
import { setUserTokenAC, getUser } from '../../store/actionCreators/userAC';
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
      .catch((err) => console.log(err));
    if (response && response.status === 200) {
      resetForm();
      dispatch(setUserTokenAC(response.data.token));
      dispatch(getUser(response.data.token));
      // localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate({ pathname: '/' });
    }
    // console.log(response);
  };

  const validationSchema = yup.object().shape({
    // login: yup.string().required('Поле обязательно').matches(/[A-Za-z ]/gi, 'Только латинские'),
    // email: yup.string().email('Неверный email').required('Поле обязательно'),
    password: yup.string().required('Поле обязательно'),
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
              <CustomInput name="loginOrEmail" type="text" placeholder="Email" />
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
    </div>
  );
}

export default memo(AuthorizationPage);
