import { RegisterDataState } from '../../types/loginDataState';
import { Action } from '../../types/actionLogin';

const registerDataReducer = (
  state: RegisterDataState,
  action: Action
): RegisterDataState => {
  if (action.type === 'NAME_USER_INPUT') {
    return {
      name: action.payload || '',
      email: state.email,
      password: state.password,
      nameIsValid: action.payload ? action.payload.trim().length > 6 : false,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'EMAIL_USER_INPUT') {
    return {
      name: state.name,
      email: action.payload || '',
      password: state.password,
      nameIsValid: state.nameIsValid,
      emailIsValid: action.payload ? action.payload.includes('@') : false,
      passwordIsValid: state.passwordIsValid,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'PASSWORD_INPUT') {
    return {
      name: state.name,
      email: state.email,
      password: action.payload || '',
      nameIsValid: state.nameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: action.payload
        ? action.payload.trim().length > 6
        : false,
      formIsValid: state.formIsValid,
    };
  }
  if (action.type === 'FORM_VALIDATION') {
    return {
      name: state.name,
      email: state.email,
      password: state.password,
      nameIsValid: state.nameIsValid,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.passwordIsValid,
      formIsValid:
        state.nameIsValid && state.emailIsValid && state.passwordIsValid,
    };
  }
  return state;
};

export default registerDataReducer;
