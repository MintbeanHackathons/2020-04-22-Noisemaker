import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  const speak = () => {
    console.log('clicked!');
  };

  return (
    <div className='container'>
      <div className='text'>Hit me!</div>
      <div className='button'>
        <Button variant='primary' onClick={speak}>
          #music
        </Button>
      </div>
    </div>
  );
}

export default App;
