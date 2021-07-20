import React, { useEffect, useReducer } from 'react';
import registerDataReducer from './RegisterReducer';
import { useAppDispatch } from '../../store/hooks';
import { sendRegistration } from '../../store/actions/registration';
import { layoutActions } from '../../store/slices/layout';
import FormLayout from '../../layout/FormLayout';

const Login = () => {
  const dispatch = useAppDispatch();
  const [registerData, dispatchRegisterData] = useReducer(registerDataReducer, {
    name: '',
    nameIsValid: false,
    email: '',
    emailIsValid: false,
    password: '',
    passwordIsValid: false,
    formIsValid: false,
  });
  const { nameIsValid, emailIsValid, passwordIsValid, formIsValid } =
    registerData;

  useEffect(() => {
    dispatchRegisterData({
      type: 'FORM_VALIDATION',
    });

    return () => {};
  }, [nameIsValid, emailIsValid, passwordIsValid]);

  const nameChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchRegisterData({
      type: 'NAME_USER_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchRegisterData({
      type: 'EMAIL_USER_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchRegisterData({
      type: 'PASSWORD_INPUT',
      payload: event.currentTarget.value,
    });
  };

  const formSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (formIsValid) {
      dispatch(
        sendRegistration({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        })
      );
    } else {
      let message = '';
      if (!nameIsValid && !passwordIsValid)
        message = 'Name, Email or Password are not valid';
      else if (!nameIsValid) message = 'Name is not valid';
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
    <FormLayout title="Create Your Account" submitHandler={formSubmitHandler}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </div>
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
      <section>
        <button type="submit">Register</button>
      </section>
    </FormLayout>
  );
};

export default Login;
