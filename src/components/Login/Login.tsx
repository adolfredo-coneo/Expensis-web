import React, { useReducer } from "react";
import classes from "./Login.module.css";

const loginDataReducer = (
  state: LoginDataState,
  action: Action
): LoginDataState => {
  if (action.type === "EMAIL_USER_INPUT") {
    console.log("Email User Input:", action);
    return {
      email: action.payload || null,
      password: state.password,
      emailIsValid: action.payload?.includes("@"),
      passwordIsValid: state.passwordIsValid,
    };
  }
  if (action.type === "EMAIL_INPUT_BLUR") {
    console.log("Email User Blur");
    return {
      email: state.email,
      password: state.password,
      emailIsValid: state.email?.includes("@"),
      passwordIsValid: state.passwordIsValid,
    };
  }
  if (action.type === "PASSWORD_INPUT") {
    console.log("Password Input:", action);
    return {
      email: state.email,
      password: action.payload || null,
      emailIsValid: state.emailIsValid,
      passwordIsValid: action.payload!.trim().length > 6,
    };
  }
  if (action.type === "PASSWORD_BLUR") {
    console.log("Password Blur");
    return {
      email: state.email,
      password: state.password,
      emailIsValid: state.emailIsValid,
      passwordIsValid: state.password!.trim().length > 6,
    };
  }
  return state;
};

const Login = () => {
  const [loginData, dispatchLoginData] = useReducer(loginDataReducer, {
    email: "",
    emailIsValid: null,
    password: "",
    passwordIsValid: null,
  });

  console.log(loginData);

  const emailChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: "EMAIL_USER_INPUT",
      payload: event.currentTarget.value,
    });
  };

  const vaidateEmailHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: "EMAIL_INPUT_BLUR",
    });
  };

  const passwordChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: "PASSWORD_INPUT",
      payload: event.currentTarget.value,
    });
  };

  const vaidatePasswordHandler = (event: React.FormEvent<HTMLInputElement>) => {
    dispatchLoginData({
      type: "PASSWORD_BLUR",
    });
  };

  return (
    <div className={classes.login}>
      <div className={classes.logo}>
        <img alt="Money Logo" src="../../../images/dollar-logo.png" />
      </div>
      <h1>eXpenses</h1>
      <h2>Access Your Account</h2>
      <section>
        <form>
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
