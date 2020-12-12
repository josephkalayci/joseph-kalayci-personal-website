import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

theme = createMuiTheme({
  typography: {
    fontFamily: `"Raleway","Raleway-semibold","Roboto", "Helvetica", "Arial", sans-serif`,
    h1: {
      '@media (min-width:600px)': {
        fontSize: '32pt',
        lineHeight: '36pt',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32pt',
        lineHeight: '36pt',
      },
    },
  },
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
});

const CostumThemeProvider = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CostumThemeProvider;
