import React, { useEffect, useReducer } from 'react';
import classes from './Login.module.css';
import getFirebase from '../../firebase';
import loginDataReducer from './LoginReducer';

const Login = () => {
  const [loginData, dispatchLoginData] = useReducer(loginDataReducer, {
    email: '',
    emailIsValid: false,
    password: '',
    passwordIsValid: false,
    formIsValid: false,
  });
  const { emailIsValid } = loginData;
  const { passwordIsValid } = loginData;

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

  const vaidateEmailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'EMAIL_INPUT_BLUR',
    });
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'PASSWORD_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const vaidatePasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: 'PASSWORD_BLUR',
    });
  };

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (loginData.formIsValid) {
      const firebaseInstance = getFirebase();
      //firebase auth username password
      try {
        if (firebaseInstance) {
          const user = await firebaseInstance
            .auth()
            .createUserWithEmailAndPassword(
              loginData.email,
              loginData.password
            );
          console.log('user', user);
        }
      } catch (error) {
        console.log('error', error);
        alert(error.message);
      }
    } else {
      console.log('Form not completed');
    }
  };

  return (
    <div className={classes.login}>
      <div className={classes.logo}>
        <img alt="Money Logo" src="../../../images/dollar-logo.png" />
      </div>
      <h1>eXpenses</h1>
      <h2>Access Your Account</h2>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={emailChangeHandler}
              onBlur={vaidateEmailHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={passwordChangeHandler}
              onBlur={vaidatePasswordHandler}
            />
          </div>
          <div className={classes.controlButton}>
            <button className={classes.button} type="submit">
              Login
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
