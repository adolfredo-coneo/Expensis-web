import React from 'react';

import classes from './SubmitButton.module.css';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  label: string;
  isSubmitting: boolean;
  submittingLabel: string;
}

const SubmitButton: React.FC<ButtonProps> = ({
  label,
  type,
  isSubmitting,
  submittingLabel,
}) => {
  return (
    <div className={classes.button}>
      <button type={type}>{isSubmitting ? submittingLabel : label}</button>
    </div>
  );
};

export default SubmitButton;
