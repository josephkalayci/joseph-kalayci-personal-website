import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import profileImage from '../assets/images/profileImage.png';
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight: '18pt',
    padding: 16,
  },

  subHeading: {
    marginTop: 20,
    marginBottom: 15,
    fontWeight: 700,
  },
  text: {},
  highlight: {
    color: '#009ada',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer} data-aos='slide-in-left'>
      <img
        src={profileImage}
        style={{ height: 250 }}
        alt={`Joseph Y. Kalayci profile`}
      />

      <div>
        <Typography className={classes.subHeading} component='div' variant='h3'>
          {`Who's this guy?`}
        </Typography>
        <Typography className={classes.text} component='div' variant='body1'>
          {`I'm a freelancer Full Stack Javascript Developer in Toronto, ON.`}
          <br />
          {`
            I have serious passion for Javascript, React, node.js,`}
          <br />
          {` animations and creating intuitive, dynamic user experiences.
            `}
          <br />
          <Link
            to='contact'
            spy={true}
            smooth={true}
            className={classes.highlight}
          >{` Let's make something special.`}</Link>
        </Typography>
      </div>
    </div>
  );
};

export default ProfileCard;
