import React from 'react';
import { Button as ButtonUI, makeStyles } from '@material-ui/core';
import green from '@material-ui/core/colors/green';

const useStyles = makeStyles(
  ({ palette: { primary, secondary, success, error } }) => ({
    primary: {
      backgroundColor: primary.main,
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    secondary: {
      backgroundColor: secondary.main,
      '&:hover': {
        backgroundColor: secondary.dark,
      },
    },
    success: {
      backgroundColor: success.main,
      '&:hover': {
        backgroundColor: success.dark,
      },
    },
    danger: {
      backgroundColor: error.main,
      '&:hover': {
        backgroundColor: error.dark,
      },
    },
  })
);

interface ButtonProps {
  color: 'primary' | 'secondary' | 'success' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <ButtonUI variant="contained" className={classes[color]} {...rest}>
      {children}
    </ButtonUI>
  );
};

export default Button;
