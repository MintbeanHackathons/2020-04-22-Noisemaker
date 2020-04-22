import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <h1>Make some noise!</h1>
    <p>
      Hackathon using <a href="https://github.com/Tonejs/Tone.js/">Tone.js</a>{' '}
      made by <a href="http://jasminey.com/">@jsmney</a> for{' '}
      <a href="https://github.com/MintbeanHackathons/2020-04-22-Noisemaker">
        Mintbean Hackathons
      </a>
    </p>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
