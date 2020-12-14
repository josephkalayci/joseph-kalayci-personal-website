import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import clsx from 'clsx';
import db from '../firebase/firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#252934',
    textAlign: 'center',
    margin: '40px auto 0 auto',
  },
  input: {
    width: '100%',
    backgroundColor: '#1e242c',
    border: 0,
    boxSizing: 'border-box',
    color: '#fff',
    display: 'block',
    fontSize: '12pt',
    marginBottom: '3px',
    outline: 'none',
    padding: '10px 15px',
  },
  textArea: { minHeight: 150 },

  button: {
    color: '#fff',
    borderColor: '#fff',
    textTransform: 'none',
    marginTop: 5,
    fontSize: '1.2rem',
    float: 'right',

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

const ContactForm = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    console.log(name, email, message);

    // Add a new document with a generated id.
    db.collection('messages')
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(function (docRef) {
        event.target.reset();
      })
      .catch(function (error) {
        alert(`Opps! something went wrong. Please try agail later\n ${error}`);
        console.error('Error adding document: ', error);
      });
  };

  return (
    <Container
      component='form'
      maxWidth='sm'
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <input
        placeholder='Name'
        name='name'
        type='text'
        className={classes.input}
      />
      <input
        placeholder='Enter email'
        name='email'
        type='email'
        className={classes.input}
      />
      <textarea
        placeholder='Your Message'
        name='message'
        type='text'
        className={clsx(classes.input, classes.textArea)}
      />
      <Button type='submit' variant='outlined' className={classes.button}>
        Submit
      </Button>
    </Container>
  );
};

export default ContactForm;
