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
    marginBottom: 10,
    fontSize: '14pt',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '11pt',
  },
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
    <div className={classes.cardContainer}>
      <img
        src={profileImage}
        style={{ width: 250 }}
        alt='Joseph Kalayci profile'
      />

      <div>
        <Typography className={classes.subHeading} component='div'>
          {`Who's this guy?`}
        </Typography>
        <Typography className={classes.text} component='div' href=''>
          {`I'm a freelancer Full Stack Javascript Developer in Toronto, ON.`}
          <br />
          {`
            I have serious passion for Javascript, React, node.js,`}
          <br />
          {` animations and creating intuitive, dynamic user experiences.
            `}
          <br />
          <Link
            to='home'
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
