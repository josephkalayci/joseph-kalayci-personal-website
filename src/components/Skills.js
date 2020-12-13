import { Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import profileImage from '../assets/images/profileImage.png';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',

    lineHeight: '18pt',
    padding: 16,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 28,
    fontSize: '7pt',
    marginBottom: 16,
    backgroundColor: '#eee',
    '& span': {
      color: '#666',
      paddingRight: 16,
      fontSize: '11pt',
    },
  },
  skillName: {
    width: 110,
    color: '#fff',
    fontSize: '11pt',
    textTransform: 'uppercase',
    backgroundColor: '#04c2c9',
    textAlign: 'center',
    fontWeight: 'bold',
    height: '100%',
  },
  bar: {
    transition: '1.2s 0.2s width ease-in-out',
    backgroundColor: '#00a1a7',
  },
}));

const Skills = ({ skills }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {skills.map((skill, id) => (
        <div className={classes.row} key={id}>
          <div className={classes.bar} style={{ width: `${skill.rate}%` }}>
            <div className={classes.skillName}>{`${skill.name}`}</div>
          </div>
          <span>{`${skill.rate}%`}</span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
