import React from 'react';
import Home from './components/Home';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <div className="Content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
