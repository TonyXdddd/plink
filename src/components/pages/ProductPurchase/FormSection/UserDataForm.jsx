import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik } from 'formik';
import * as yup from 'yup';
import { setValidUserFormDataAC } from "../../../../redux/productPurchasePageReducer";
import { toastMessage } from "../../../reused/toast";
import classNames from "classnames";
import styles from './UserDataForm.module.scss';

export const UserDataForm = ({ className }) => {
  const { selectedProduct } = useSelector(state => state.productsPurchase);
  const dispatch = useDispatch();
  const trimInputValue = (value) => value.replace(/ +(?= )/g,'').trimLeft();

  useEffect(() =>
    toastMessage('✨ the product is selected. Please fill in the required information', 'dark'),
    [selectedProduct]);

  const formValidationSchema = yup.object().shape({
    fullName: yup.string()
      .min(3, 'The fullName needs to be at least 2 char')
      .max(70, 'Too long string')
      .typeError('Must be a string')
      .required('fullName is required'),
    email: yup.string()
      .email('Must be a correct email')
      .required('email is required')
      .typeError('Must be a string')
      .max(70, 'Too long string'),
    country: yup.string()
      .required('Country is required')
      .typeError('Must be a string')
      .max(70, 'Too long string'),
    city: yup.string()
      .required('City is required')
      .typeError('Must be a string')
      .max(70, 'Too long string'),
    address: yup.string()
      .required('Required for purchase sending')
      .typeError('Must be a string')
      .max(70, 'Too long string'),
  });

  return (
    <div
      className={classNames(
      styles.formWrapper,
      className,
      )}
    >
      <Formik
        initialValues={{
          fullName: '',
          email: '',
          country: '',
          city: '',
          address: '',
        }}
        validateOnBlur
        onSubmit={(values) => dispatch(setValidUserFormDataAC(values))}
        validationSchema={formValidationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
          <div className={styles.form}>
            <p>
              <label className={styles.label} htmlFor={'fullName'}>Please, enter your FullName</label>
              <input
                className={styles.input}
                type={'text'}
                name={'fullName'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={trimInputValue(values.fullName)}
              />
              { touched.fullName && errors.fullName && <div className={styles.error}>{ errors.fullName }</div>}
            </p>
            <p>
              <label className={styles.label} htmlFor={'email'}>Please, enter your Email</label>
              <input
                className={styles.input}
                type={'email'}
                name={'email'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={trimInputValue(values.email)}
              />
              { touched.email && errors.email && <div className={styles.error}>{ errors.email }</div> }
            </p>
            <p>
              <label className={styles.label} htmlFor={'country'}>Please, enter your Country</label>
              <input
                className={styles.input}
                type={'text'}
                name={'country'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={trimInputValue(values.country)}
              />
              { touched.country && errors.country && <div className={styles.error}>{ errors.country }</div>}
            </p>
            <p>
              <label className={styles.label} htmlFor={'city'}>Please, enter your City</label>
              <input
                className={styles.input}
                type={'text'}
                name={'city'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={trimInputValue(values.city)}
              />
              { touched.city && errors.city && <div className={styles.error}>{ errors.city }</div>}
            </p>
            <p>
              <label className={styles.label} htmlFor={'address'}>Please, enter your Address</label>
              <input
                className={styles.input}
                type={'text'}
                name={'address'}
                onChange={handleChange}
                onBlur={handleBlur}
                value={trimInputValue(values.address)}
              />
              { touched.address && errors.address && <div className={styles.error}>{ errors.address }</div>}
            </p>
            <button
              className={styles.confirmButton}
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type={'submit'}
            >
              Confirm order
            </button>
          </div>
        )}
      </Formik>
    </div>
  )
};
