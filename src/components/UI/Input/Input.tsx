import React, { useRef } from 'react';

import classes from './Input.module.css';

interface InputProps {
  id: string;
  type: string;
  label: string;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  setFocus?: boolean;
}

const Input: React.FC<InputProps> = ({ id, type, label, onChange, setFocus = false }) => {
  const ref = useRef<HTMLInputElement>(null);

  if(ref.current !== null && setFocus) {
    ref.current.focus();
  }

  return (
    <div className={classes.control}>
      <label htmlFor={id}>{label}</label>
      <input ref={ref} type={type} id={id} required onChange={onChange} />
    </div>
  );
};

export default Input;
