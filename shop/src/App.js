import React, { useState, useEffect } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
//import Cart from './components/ShoppingCart';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export const CounterContext = React.createContext()



function App() {

  const [Counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(JSON.parse(window.sessionStorage.getItem('count')));
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('count', Counter);
  }, [Counter]);

  function ChangeCounter() {
    setCounter(Counter+1);
  }

  return (
    <CounterContext.Provider value={{Counter, ChangeCounter}}>
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="Content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>        
        
        </Switch>
      </div>
      
      <footer>
        <Footer />
      </footer>
    </div>
    </Router>
    </CounterContext.Provider>
  );
}

export default App;
