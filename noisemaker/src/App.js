import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='container'>
      <div className='text'>Hit me!</div>
      <div>
        <Button variant='primary'>Primary</Button>
      </div>
    </div>
  );
}

export default App;
