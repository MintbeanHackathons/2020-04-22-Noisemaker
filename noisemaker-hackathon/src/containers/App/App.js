import React, {Component} from 'react';
import './App.css';
import Button from '../Button/Button.js'

export class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {

  }


  render() {
    return (
      <main className="App">
        <header className="App-header">
          <p>
            Sound Button
          </p>
        </header>
        <Button />
      </main>
    );
  }
}



export default App;
