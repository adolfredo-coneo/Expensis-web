import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress, {
  LinearProgressProps,
} from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const ProgressBar: React.FC<LinearProgressProps> = ({ variant, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box display="flex" alignItems="center" m={4}>
        <Box width="100%" mr={1}>
          <LinearProgress variant={variant} {...rest} />
        </Box>
        {variant !== 'indeterminate' && (
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(
              rest.value || 0
            )}%`}</Typography>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default ProgressBar;
