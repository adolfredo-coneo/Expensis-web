import React from 'react';
import {
  Typography,
  Container,
  makeStyles,
  createStyles,
  Box,
  Grid,
} from '@material-ui/core';
import Breadcrumb from '../../components/UI/Breadcrumb/Breadcrumb';
import { BorderStyle } from '../../types/ui';
import { getPage } from '../../utils/Pages';

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
    trailing: {
      textAlign: 'right',
      color: theme.palette.text.secondary,
    },
  })
);

interface DashContentProps {
  code: string;
  variant?: BorderStyle;
  trailing?: JSX.Element;
}

const DashContent: React.FC<DashContentProps> = ({
  code,
  variant = 'solid',
  children,
  trailing,
}) => {
  const classes = useStyles({ borderStyle: variant });
  const { title, breadcrumb } = getPage(code);

  return (
    <Box m={1} height="90%" width="98%">
      <Breadcrumb title={title} breadcrumbItems={breadcrumb} />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Typography variant="h2" component="h2" gutterBottom>
            {title}
          </Typography>
        </Grid>
        <Grid item xs className={classes.trailing}>
          {trailing}
        </Grid>
      </Grid>
      <Box border={2} className={classes.content}>
        <Container maxWidth={false}>
          <Box m={2}>{children}</Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DashContent;
