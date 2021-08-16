import React from 'react';
import {
  Button as ButtonUI,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import green from '@material-ui/core/colors/green';
import { ButtonColor, ButtonSize } from '../../../types/ui';

interface Props {
  padding: string;
}

const useStyles = (props: Props) =>
  makeStyles(
    ({ palette: { primary, secondary, success, error }, ...theme }: Theme) =>
      createStyles({
        primary: {
          backgroundColor: primary.main,
          color: primary.contrastText,
          '&:hover': {
            backgroundColor: green[700],
          },
          padding: props.padding,
          marginLeft: theme.spacing(1),
        },
        secondary: {
          backgroundColor: secondary.main,
          color: secondary.contrastText,
          '&:hover': {
            backgroundColor: secondary.dark,
          },
          padding: props.padding,
          marginLeft: theme.spacing(1),
        },
        success: {
          backgroundColor: success.main,
          color: success.contrastText,
          '&:hover': {
            backgroundColor: success.dark,
          },
          padding: props.padding,
          marginLeft: theme.spacing(1),
        },
        danger: {
          backgroundColor: error.main,
          color: error.contrastText,
          '&:hover': {
            backgroundColor: error.dark,
          },
          padding: props.padding,
          marginLeft: theme.spacing(1),
        },
      })
  );

interface ButtonProps {
  color: ButtonColor;
  size: ButtonSize;
  onClick?: () => void;
}

export const ButtonSizeMap = {
  small: '10px 30px',
  medium: '10px 50px',
  large: '10px 70px',
};

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  size = 'small',
  children,
  ...rest
}) => {
  const padding = ButtonSizeMap[size];
  const props = { padding: padding };
  const classes = useStyles(props)();

  return (
    <ButtonUI
      variant="contained"
      className={classes[color]}
      {...rest}
      size="large"
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
