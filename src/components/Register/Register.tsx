import React, { useEffect, useReducer, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../UI/Input/Input';
import SubmitButton from '../UI/SubmitButton/SubmitButton';
import registerDataReducer from './RegisterReducer';
import { useAppDispatch } from '../../store/hooks';
import { sendRegistration } from '../../store/actions/registration';
import { layoutActions } from '../../store/slices/layout';
import FormLayout from '../../layout/FormLayout';

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useAppDispatch();
  const history = useHistory();
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
    if (!isSubmitting) {
      if (formIsValid) {
        setIsSubmitting(true);
        const response = await dispatch(
          sendRegistration({
            name: registerData.name,
            email: registerData.email,
            password: registerData.password,
          })
        );
        setIsSubmitting(false);
        if (response) {
          history.push('/dashboard');
        }
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
          })
        );
      }
    }
  };

  return (
    <FormLayout title="Create Your Account" submitHandler={formSubmitHandler}>
      <Input
        id="name"
        type="text"
        label="Name"
        onChange={nameChangeHandler}
        setFocus={true}
      />
      <Input
        id="email"
        type="email"
        label="Email"
        onChange={emailChangeHandler}
      />
      <Input
        id="password"
        type="password"
        label="Password"
        onChange={passwordChangeHandler}
      />
      <SubmitButton
        label="Create Account"
        type="submit"
        isSubmitting={isSubmitting}
        submittingLabel="Registering..."
      />
    </FormLayout>
  );
};

export default Login;
