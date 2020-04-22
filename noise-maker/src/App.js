import React from 'react';
import SynteH from './containers/syntetizerHigh';
import SynteL from './containers/syntetizerLow';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Carlos's Syte
        </h1>
      </header>
      <main>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 justify-content-center">
              <SynteL />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 justify-content-center">
              <SynteH />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
