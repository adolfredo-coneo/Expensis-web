import React, { useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';

import loginDataReducer from './LoginReducer';
import Input from '../UI/Input/Input';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import { useAppDispatch } from '../../store/hooks';
import { sendLogin } from '../../store/actions/auth';
import { layoutActions } from '../../store/slices/layout';
import FormLayout from '../../layout/FormLayout';

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const history = useHistory();
  const [loginData, dispatchLoginData] = useReducer(loginDataReducer, {
    email: '',
    emailIsValid: false,
    password: '',
    passwordIsValid: false,
    formIsValid: false,
  });
  const { emailIsValid, passwordIsValid, formIsValid } = loginData;

  useEffect(() => {
    dispatchLoginData({
      type: 'FORM_VALIDATION',
    });

    return () => {};
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'EMAIL_USER_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'PASSWORD_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!isSubmitting) {
      if (formIsValid) {
        setIsSubmitting(true);
        const response = await dispatch(
          sendLogin({
            email: loginData.email,
            password: loginData.password,
          })
        );
        setIsSubmitting(false);
        if (response) {
          history.push('/dashboard');
        }
      } else {
        let message = '';
        if (!emailIsValid && !passwordIsValid)
          message = 'Email and password are not valid';
        else if (!emailIsValid) message = 'Email is not valid';
        else if (!passwordIsValid) message = 'Password is not valid';

        dispatch(
          layoutActions.setNotification({
            message,
            status: 'error',
          })
        );
      }
    }
  };

  return (
    <FormLayout title="Access Your Account" submitHandler={formSubmitHandler}>
      <Input
        id="email"
        label="Email"
        type="email"
        onChange={emailChangeHandler}
        setFocus={true}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        role="password"
        onChange={passwordChangeHandler}
      />
      <SubmitButton
        type="submit"
        label="Login"
        isSubmitting={isSubmitting}
        submittingLabel="Submitting..."
      />
    </FormLayout>
  );
};

export default Login;
