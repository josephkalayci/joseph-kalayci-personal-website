import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedIcon from '@material-ui/icons/Speed';
import FlareIcon from '@material-ui/icons/Flare';
import DevicesIcon from '@material-ui/icons/Devices';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import profileImage from '../assets/images/profileImage.png';
import Hexagon from './Hexagon';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProfileCard from './ProfileCard';
import Skills from './Skills';
import { profile } from '../constants/personalInfo';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#616161',
    lineHeight: '11pt',
    padding: '70px 0 70px 0',
  },
  header: {
    fontWeight: 600,
    color: '#444649',
    fontSize: '25pt',
  },
  headerBar: {
    display: 'blcok',
    fontWeight: 600,
    backgroundColor: '#444649',
    height: 4,
    width: 70,
    margin: '25px 0 75px 0',
    fontSize: '8pt',
  },
  cardContainer: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    padding: 16,
  },
  icon: {
    color: '#fff',
    fontSize: 40,
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
}));

const About = () => {
  const classes = useStyles();

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const Card = ({ title, description, icon, image }) => (
    <div className={classes.cardContainer} data-animation='slide-in-left'>
      {image ? (
        <img
          src={profileImage}
          style={{ width: 250 }}
          alt='Joseph Kalayci profile'
        />
      ) : (
        <Hexagon height={100}>{icon}</Hexagon>
      )}

      <div>
        <Typography className={classes.subHeading} component='div'>
          {title}
        </Typography>
        <Typography className={classes.text} component='div'>
          {description}
        </Typography>
      </div>
    </div>
  );

  return (
    <Grid
      id='about'
      container
      direction='column'
      justify='center'
      alignItems='center'
      component='section'
      className={classes.root}
    >
      <Typography component='div' variant='h1' className={classes.header}>
        ABOUT
      </Typography>
      <div className={classes.headerBar} />
      <Grid item container spacing={1}>
        <Grid item container xs={6} sm={6} md={3}>
          <Card
            icon={<SpeedIcon className={classes.icon} />}
            title='Fast'
            description='Fast load times and lag free interaction, my highest priority.'
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            icon={<DevicesIcon className={classes.icon} />}
            title='Intuitive'
            description='Strong preference for easy to use, intuitive UX/UI.'
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            icon={<FlareIcon className={classes.icon} />}
            title='Responsive'
            description='My layouts will work on any device, big or small.'
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Card
            icon={<GpsFixedIcon className={classes.icon} />}
            title='Dynamic'
            description={`Websites don't have to be static, I love making pages come to life.`}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ProfileCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <Skills skills={profile.skills} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
