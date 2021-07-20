import React from 'react';
import classes from './FormLayout.module.css';

interface Props {
  title: string;
  submitHandler: (event: React.FormEvent) => void;
}

const FormLayout: React.FC<Props> = ({ title, submitHandler, children }) => {
  return (
    <div className={classes.formExternal}>
      <div className={classes.logo}>
        <img alt="Money Logo" src="../../../images/dollar-logo.png" />
      </div>
      <h1>eXpenses</h1>
      <h2>{title}</h2>
      <section>
        <form className={classes.form} onSubmit={submitHandler}>{children}</form>
      </section>
    </div>
  );
};

export default FormLayout;
