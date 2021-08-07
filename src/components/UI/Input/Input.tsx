import React, { useEffect, useRef } from 'react';

import classes from './Input.module.css';

interface InputProps {
  id: string;
  label: string;
  variant?: string;
  type?: string;
  role?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  setFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  variant = 'small',
  id,
  type = 'text',
  label,
  role,
  onChange,
  setFocus = false,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current !== null && setFocus) {
      ref.current.focus();
    }
  }, [setFocus]);

  return (
    <div className={`${classes.control} ${classes[variant]}`}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={ref}
        type={type}
        id={id}
        name={id}
        role={role}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
