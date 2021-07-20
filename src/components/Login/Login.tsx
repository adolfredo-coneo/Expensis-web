import React, { useEffect, useReducer } from 'react';
import loginDataReducer from './LoginReducer';
import { useAppDispatch } from '../../store/hooks';
import { sendLogin } from '../../store/actions/auth';
import { layoutActions } from '../../store/slices/layout';
import FormLayout from '../../layout/FormLayout';

const Login = () => {
  const dispatch = useAppDispatch();
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
    if (formIsValid) {
      dispatch(
        sendLogin({
          email: loginData.email,
          password: loginData.password,
        })
      );
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
          title: '',
        })
      );
    }
  };

  return (
    <FormLayout title="Access Your Account" submitHandler={formSubmitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required onChange={emailChangeHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          onChange={passwordChangeHandler}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </FormLayout>
  );
};

export default Login;
