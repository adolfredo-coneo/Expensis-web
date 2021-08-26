import {
  createTheme as createMuiTheme,
  unstable_createMuiStrictModeTheme,
} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

// REMOVE THIS WHEN USING MATERIAL UI v5.0
// see https://github.com/mui-org/material-ui/issues/13394 for more info on
// Warning: findDOMNode is deprecated in StrictMode.
// eslint-disable-next-line camelcase
const createTheme =
  process.env.NODE_ENV === 'production'
    ? createMuiTheme
    : unstable_createMuiStrictModeTheme;

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f7050',
    },
    secondary: {
      main: blue[500],
      dark: blue[700],
    },
  },
});

export default theme;
