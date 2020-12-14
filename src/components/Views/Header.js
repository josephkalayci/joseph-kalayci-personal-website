import React from 'react';
import {
  Container,
  IconButton,
  makeStyles,
  useMediaQuery,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    left: 0,
    height: 50,
    width: '100%',
    zIndex: 99,
    background: '#1b242f',
    borderBottom: ` 3px solid ${theme.palette.primary.main}`,
  },
  fixed: {
    position: 'absolute',
    bottom: 0,
  },
  sticky: {
    position: 'fixed',
    top: 0,
    animationName: '$moveDown',
    animationDuration: '0.5s',
    animationTimingFunction: 'ease-in-out',
  },
  linkWrapper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      top: 50,
      height: 0,
      flexDirection: 'column',
      alignItems: 'baseline',
      overflow: 'hidden',
      backgroundColor: '#333',
      transition: 'height 0.3s ease-out',
      '& a': {
        margin: 0,
        padding: '10px 20px 10px 20px',
      },
    },
  },
  linkWrapperVisible: {
    height: 180,
  },
  link: {
    margin: '0 20px',
    fontSize: '12pt',
    transition: 'color 0.5s',
    textTransform: 'uppercase',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  activeLink: { color: theme.palette.secondary.main },
  menuButton: {
    color: '#fff',
    fontSize: 28,
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      marginLeft: 'auto',
    },
  },

  '@keyframes moveDown': {
    from: {
      transform: 'translateY(-5rem)',
    },
    to: {
      transform: 'translateY(0rem)',
    },
  },
}));

const Navbar = ({ sticky }) => {
  const classes = useStyles();
  const [isVisible, setIsVisible] = React.useState(false);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

  return (
    <nav
      className={clsx(classes.root, sticky ? classes.sticky : classes.fixed)}
    >
      <Container
        maxWidth='lg'
        className={clsx({
          [classes.linkWrapper]: true,
          [classes.linkWrapperVisible]: isSmallScreen && isVisible,
        })}
      >
        <Link
          activeClass={classes.activeLink}
          className={classes.link}
          to='home'
          spy={true}
          smooth={true}
        >
          Home
        </Link>
        <Link
          activeClass={classes.activeLink}
          className={classes.link}
          to='about'
          spy={true}
          smooth={true}
        >
          About
        </Link>
        <Link
          activeClass={classes.activeLink}
          className={classes.link}
          to='portfolio'
          spy={true}
          smooth={true}
        >
          Portfolio
        </Link>
        <Link
          activeClass={classes.activeLink}
          className={classes.link}
          to='contact'
          spy={true}
          smooth={true}
        >
          Contact
        </Link>
      </Container>

      <IconButton
        className={classes.menuButton}
        aria-label='menu'
        onClick={() => setIsVisible(!isVisible)}
      >
        <MenuIcon fontSize='inherit' />
      </IconButton>
    </nav>
  );
};

export default Navbar;