/* eslint-disable max-len */
import React from 'react';

import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

import CustomInput from '../../components/CustomInput/CustomInput';
import { createNewCustomer } from '../../api/api';
import { ToastNotification } from '../../utils/toastify';
import styles from './SignUpPage.module.scss';

function SignUpPage() {
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    login: '',
    email: '',
    password: '',
    telephone: '',
    gender: '',
    avatarUrl: '../../assets/icons/defaultUserIcon.png',
    isAdmin: false,
  };

  const onSubmit = async (values, { resetForm }) => {
    if (values.password !== values.repeatPassword) {
      toast('Passwords should be equal');
      return;
    }
    const newCustomer = values;
    const response = await createNewCustomer(newCustomer)
      .then((user) => user)
      .catch(() => toast.error('Enter correct data'));

    if (response && response.status === 200) {
      resetForm();
      navigate({ pathname: '/sign-in' });
    }
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('Required data')
      .matches(/[A-Za-z ]/gi, 'Use only latin letters'),
    lastName: yup
      .string()
      .required('Required data')
      .matches(/[A-Za-z ]/gi, 'Use only latin letters'),
    login: yup
      .string()
      .required('Required data')
      .matches(/[A-Za-z ]/gi, 'Use only latin letters'),
    telephone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email('Enter correct email').required('Required data'),
    password: yup.string().required('Enter password').min(7, 'Password shouldn`t be less than 7 symbols'),
    repeatPassword: yup.string().required('Repeat password').min(7, 'Password shouldn`t be less than 7 symbols'),
  });

  return (
    <div className={styles.signUpPageWrapper}>
      <h1 className={styles.mainTitle}>Customer registration</h1>
      <div className={styles.signUpBlocksPageWrapper}>
        <div className={styles.signUpBlockWrapper}>
          <h2 className={styles.customersBlocksTitle}>Customers information</h2>
          <p className={styles.customersBlocksSubtitle}>If you are not have an account, fill information below</p>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            <Form>
              <p className={styles.inputLabel}>FirstName*</p>
              <CustomInput name="firstName" type="text" placeholder="FirstName" />
              <p className={styles.inputLabel}>LastName*</p>
              <CustomInput name="lastName" type="text" placeholder="LastName" />
              <p className={styles.inputLabel}>Login*</p>
              <CustomInput name="login" type="text" placeholder="Login" />
              <p className={styles.inputLabel}>Email*</p>
              <CustomInput name="email" type="text" placeholder="Email" />
              <p className={styles.inputLabel}>Phone*</p>
              <CustomInput name="telephone" type="tel" placeholder="Phone" />
              <p className={styles.inputLabel}>Gender</p>
              <CustomInput name="gender" type="text" placeholder="Gender" />
              <p className={styles.inputLabel}>Password*</p>
              <CustomInput name="password" type="password" placeholder="Password" />
              <p className={styles.inputLabel}>Repeat password*</p>
              <CustomInput name="repeatPassword" type="password" placeholder="Repeat password" />

              <button type="submit" className={styles.createCustomerButton}>
                Create account
              </button>
            </Form>
          </Formik>
        </div>
        <div className={`${styles.signUpBlockWrapper} ${styles.signInBlockWrapper}`}>
          <h2 className={styles.customersBlocksTitle}>Already have registered Account?</h2>
          <p className={styles.customersBlocksSubtitle}>If you are not have an account, you can Login on button below</p>
          <Link to="/sign-in">
            <button type="button" className={styles.createCustomerButton}>
              Log In Page
            </button>
          </Link>
        </div>
      </div>
      <ToastNotification position="top-right" hideBar close={false} theme="light" width="inherit" className="toast-container" />
    </div>
  );
}

export default SignUpPage;
