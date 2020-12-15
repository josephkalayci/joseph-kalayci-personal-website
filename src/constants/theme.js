import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme = createMuiTheme({
  palette: {
    primary: {
      light: '#36ced3',
      main: '#04c2c9',
      dark: '#02878c',
      //contrastText: '#fff',
    },
    secondary: {
      light: '#EB5694',
      main: '#e31b6d',
      dark: '#D71968',
      //contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: `"Raleway","Raleway-semibold","Roboto", "Helvetica", "Arial", sans-serif`,
    h2: {
      fontSize: '30pt',
      [theme.breakpoints.down('sm')]: {
        fontSize: '25pt',
      },
    },
    h3: {
      fontSize: '18pt',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14pt',
      },
    },
    body1: {
      fontSize: '12pt',
      [theme.breakpoints.down('xs')]: {
        fontSize: '8pt',
      },
    },
  },
});

const CostumThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CostumThemeProvider;
