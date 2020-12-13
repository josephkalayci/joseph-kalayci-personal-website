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
      light: '#757ce8',
      main: '#04c2c9',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#04c2c9',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: `"Raleway","Raleway-semibold","Roboto", "Helvetica", "Arial", sans-serif`,
    h3: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.4rem',
        lineHeight: '1.6rem',
      },
    },
  },
});

const CostumThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CostumThemeProvider;
