import { LoginDataState } from '../../types/loginDataState';
import { Action } from '../../types/actionLogin';

const loginDataReducer = (
  state: LoginDataState,
  action: Action
): LoginDataState => {
  if (action.type === 'EMAIL_USER_INPUT') {
    return {
      email: action.payload || '',
      password: state.password,
      emailIsValid: action.payload ? action.payload.includes('@') : false,
      passwordIsValid: state.passwordIsValid,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'EMAIL_INPUT_BLUR') {
    return {
      email: state.email,
      password: state.password,
      emailIsValid: state.email ? state.email.includes('@') : false,
      passwordIsValid: state.passwordIsValid,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'PASSWORD_INPUT') {
    return {
      email: state.email,
      password: action.payload || '',
      emailIsValid: state.emailIsValid,
      passwordIsValid: action.payload
        ? action.payload.trim().length > 6
        : false,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'PASSWORD_BLUR') {
    return {
      email: state.email,
      password: state.password,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.password
        ? state.password.trim().length > 6
        : false,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'FORM_VALIDATION') {
    return {
      email: state.email,
      password: state.password,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      formIsValid: state.emailIsValid && state.passwordIsValid,
    };
  }
  return state;
};

export default loginDataReducer;
