import React from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
