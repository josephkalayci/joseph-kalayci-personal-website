import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../node_modules/aos/dist/aos.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '18pt',
    padding: '16px 0 0 0',
  },
  row: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 28,
    marginBottom: 16,
    backgroundColor: '#eee',
    fontSize: '11pt',
    [theme.breakpoints.down('xs')]: {
      fontSize: '7pt',
    },
    '& span': {
      color: '#666',
      padding: '0 16px 0 16px',
      fontSize: '11pt',
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
  },
  skillName: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: '0',
    height: '100%',
    width: 120,
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
    fontWeight: 700,
  },
  bar: {
    backgroundColor: '#00a1a7',
  },
}));

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <div className={classes.root} data-aos='slide-in-right'>
      {skills.map((skill, id) => (
        <div className={classes.row} key={id}>
          <Typography
            component='div'
            className={classes.bar}
            style={{
              width: `${skill.rate}%`,
            }}
          >
            <Typography
              component='div'
              className={classes.skillName}
            >{`${skill.name}`}</Typography>
          </Typography>
          <Typography component='span'>{`${skill.rate}%`}</Typography>
        </div>
      ))}
    </div>
  );
};

export default Skills;
