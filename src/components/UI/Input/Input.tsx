import React from 'react';

import classes from './Input.module.css';

interface InputProps {
  id: string;
  type: string;
  label: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ id, type, label, onChange }) => {
  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} required onChange={onChange} />
    </div>
  );
};

export default Input;
