import { createTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

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
