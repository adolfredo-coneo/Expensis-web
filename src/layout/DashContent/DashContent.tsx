import React from 'react';
import {
  Breadcrumbs,
  Typography,
  Link,
  Container,
  makeStyles,
  createStyles,
  Box,
} from '@material-ui/core';
import { BorderStyle } from '../../types/ui';

interface StyleProps {
  borderStyle: BorderStyle;
}

const useStyles = makeStyles((theme) =>
  createStyles({
    content: (props: StyleProps) => ({
      padding: theme.spacing(1),
      width: '100%',
      height: '95%',
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.primary.main,
      borderRadius: 4,
      border: '3px',
      borderStyle: props.borderStyle,
    }),
  })
);

interface DashContentProps {
  title: string;
  variant?: BorderStyle;
}

const DashContent: React.FC<DashContentProps> = ({
  title,
  variant = 'solid',
  children,
}) => {
  const classes = useStyles({ borderStyle: variant });

  return (
    <Box m={1} height="90%" width="98%">
      <Typography variant="h2" component="h2" gutterBottom>
        {title}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Main
        </Link>
        <Typography color="textPrimary">{title}</Typography>
      </Breadcrumbs>
      <Box border={2} className={classes.content}>
        <Container maxWidth={false}>
          <Box m={2}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DashContent;
