import React from 'react';
import './App.css';
import { ProductsList } from './components/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<Counter />*/}
        <p>I will build a great shop </p>
      </header>
      <div className="menu">
        <button>Home</button>
        <button>Products</button>
        <button>Contact</button>
      </div>
      <div className="productList">
        <ProductsList />
      </div>
    </div>
  );
}

export default App;
