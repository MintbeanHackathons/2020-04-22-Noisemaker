import React from 'react'

import './App.css'
import {Provider} from 'react-redux'
import {store} from './store'
import {Routes} from './components'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App
