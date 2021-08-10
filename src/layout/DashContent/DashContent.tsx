import React from 'react';
import {
  Box,
  Breadcrumbs,
  Typography,
  Link,
  Container,
  makeStyles,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    content: {
      padding: theme.spacing(1),
      width: '100%',
      height: '90%',
      backgroundColor: theme.palette.background.default,
    },
  })
);

interface DashContentProps {
  title: string;
}

const DashContent: React.FC<DashContentProps> = ({ title, children }) => {
  const classes = useStyles();

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
      <Box border={2} borderRadius={4} borderColor="#3f7050" height="95%">
        <Container maxWidth={false} className={classes.content}>
          <Box m={2}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DashContent;
