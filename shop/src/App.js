import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductList from './components/PoductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <div className="Content">
        <Home />
        <ProductList />
      </div>
    </div>
  );
}

export default App;
