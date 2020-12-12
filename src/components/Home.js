import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../assets/images/homeBackground.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 'calc(100vh + 53px)',
    background: 'url(' + backgroundImage + ') center center/cover',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#252934',
  },
  text: {
    //fontSize: '32pt',
    //lineHeight: '36pt',
  },
  highlight: {
    color: '#e31b6d',
    fontFamily: 'Raleway',
    fontWeight: 600,
    //fontSize: '32pt',
    // lineHeight: '36pt',
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
    textTransform: 'none',
    marginTop: 20,
    fontSize: '13pt',

    '&:hover': {
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
    },
    '& .MuiSvgIcon-root': {
      transition: 'all 0.3s ease',
    },
    '&:hover .MuiSvgIcon-root': {
      transform: 'rotate(90deg)',
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      component='section'
      className={classes.root}
    >
      <Typography component='h1' className={classes.text}>
        {"Hello, I'm "}
        <Typography component='span' className={classes.highlight}>
          Joseph Kalayci
        </Typography>
        {'.'}
        <br />
        {"I'm a full-stack javascript developer"}
      </Typography>

      <Button
        variant='outlined'
        color='secondary'
        endIcon={<ArrowForwardIcon />}
        size='large'
        className={classes.button}
      >
        View my work
      </Button>
    </Grid>
  );
};

export default Home;
