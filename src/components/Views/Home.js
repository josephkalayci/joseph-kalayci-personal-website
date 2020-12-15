import { Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import backgroundImage from '../../assets/images/homeBackground.png';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { profile } from '../../constants/personalInfo';
import { Link } from 'react-scroll';

import { SpaceCanvas } from '../SpaceCanvas';
import Navbar from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    height: 'calc(100vh + 53px)',
    background: 'url(' + backgroundImage + ') center center/cover',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#252934',
  },
  text: {
    fontSize: '32pt',
    lineHeight: '36pt',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16pt',
      lineHeight: '20pt',
    },
  },
  highlight: {
    color: theme.palette.secondary.main,
    fontFamily: 'Raleway',
    fontWeight: 700,
    fontSize: '32pt',
    lineHeight: '36pt',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16pt',
      lineHeight: '20pt',
    },
  },
  button: {
    color: '#fff',
    borderColor: '#fff',
    textTransform: 'none',
    marginTop: 20,
    fontSize: '1.2rem',

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
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));
  const [isSticky, setSticky] = React.useState(false);
  const stickyRef = React.useRef(null);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    stickyRef.current.getBoundingClientRect().y < 0
      ? setSticky(true)
      : setSticky(false);
  };

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      component='section'
      className={classes.root}
      id='home'
    >
      <SpaceCanvas
        background='transparent'
        touch={isSmallScreen ? false : true}
        style={{
          marginBottom: 16,
          height: 350,
          width: 350,
          marginTop: -63,
        }}
      />
      <Typography component='h1' className={classes.text}>
        {"Hello, I'm "}
        <Typography component='span' className={classes.highlight}>
          {`${profile.name} ${profile.surname}`}
        </Typography>
        {'.'}
        <br />
        {"I'm a full-stack javascript developer"}
      </Typography>

      <Link
        to='about'
        spy={true}
        smooth={true}
        className={classes.scroolButtonWarpper}
      >
        <Button
          variant='outlined'
          color='secondary'
          endIcon={<ArrowForwardIcon />}
          size='large'
          className={classes.button}
        >
          View my work
        </Button>
      </Link>
      <div
        ref={stickyRef}
        style={{
          position: 'absolute',
          bottom: 0,
        }}
      />

      <Navbar sticky={isSticky} />
    </Grid>
  );
};

export default Home;
