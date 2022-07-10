/* eslint-disable max-len */
import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import CustomInput from '../../components/CustomInput/CustomInput';
import { createNewCustomer } from '../../api/api';
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
      alert('Passwords should be equal');
    }
    const newCustomer = values;
    const response = await createNewCustomer(newCustomer).then((user) => user).catch((err) => console.log(err));

    if (response && response.status === 200) {
      resetForm();
      navigate({ pathname: '/sign-in' });
    }
    console.log(response);
  };

  const validationSchema = yup.object().shape({
    firstName: yup
      .string()
      .required('Поле обязательно')
      .matches(/[A-Za-z ]/gi, 'Только латинские'),
    lastName: yup
      .string()
      .required('Поле обязательно')
      .matches(/[A-Za-z ]/gi, 'Только латинские'),
    login: yup
      .string()
      .required('Поле обязательно')
      .matches(/[A-Za-z ]/gi, 'Только латинские'),
    // email: yup.string().email('Неверный email').required('Поле обязательно'),
    // password: yup.string().required('Поле обязательно'),
    // repeatPassword: yup.string().required('Поле обязательно'),
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
              <CustomInput name="firstName" type="text" placeholder="FirstName" />
              <CustomInput name="lastName" type="text" placeholder="LastName" />
              <CustomInput name="login" type="text" placeholder="Login" />
              <CustomInput name="email" type="text" placeholder="Email" />
              <CustomInput name="telephone" type="tel" placeholder="Telephone" />
              <CustomInput name="gender" type="text" placeholder="Gender" />
              {/* <CustomInput
                name="avatarUrl"
                type={"url" || "file"}
                placeholder="avatarUrl"
              /> */}
              <CustomInput name="password" type="password" placeholder="Password" />
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
    </div>
  );
}

export default SignUpPage;
