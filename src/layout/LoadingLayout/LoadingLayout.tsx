import {
  Box,
  Container,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import React from 'react';

import ProgressBar from '../../components/UI/ProgressBar/ProgressBar';
import { ProgressVariant } from '../../types/ui';

interface LoadingLayoutProps {
  value: number;
  variant?: ProgressVariant;
}

const useStyles = makeStyles(({ palette: { primary } }: Theme) =>
  createStyles({
    root: {
      width: '100%',
      justifyContent: 'center',
      marginTop: '1rem',
    },
    title: {
      color: primary.main,
    },
    logo: {
      width: '30%',
    },
  })
);

const LoadingLayout: React.FC<LoadingLayoutProps> = ({
  value,
  variant = 'determinate',
}) => {
  const classes = useStyles();

  return (
    <Container fixed>
      <Box display="flex" className={classes.root}>
        <Typography variant="h1" className={classes.title}>
          eXpensis
        </Typography>
      </Box>
      <Box display="flex" className={classes.root}>
        <img
          alt="Money Logo"
          className={classes.logo}
          src="../../../images/dollar-logo.png"
        />
      </Box>
      <ProgressBar variant={variant} value={value} />
    </Container>
  );
};

export default LoadingLayout;
