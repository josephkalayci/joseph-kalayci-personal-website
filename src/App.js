import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Container } from '@material-ui/core';
function App() {
  return (
    <div className='App'>
      <Home />

      <About />
    </div>
  );
}

export default App;
