import './App.css';
import React from 'react';
import { Container } from '@material-ui/core';

import Home from './components/Views/Home';
import About from './components/Views/About';
import Contact from './components/Views/Contact';
import Footer from './components/Views/Footer';
import Portfolio from './components/Views/Portfolio';

function App() {
  return (
    <div className='App'>
      <Home />
      <Container maxWidth='lg'>
        <About />
      </Container>
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
