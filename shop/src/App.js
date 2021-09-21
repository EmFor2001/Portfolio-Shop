import React, { useState } from 'react';
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
  function ChangeCounter() {
    setCounter(Counter+1);
  }
  console.log(Counter);

  return (
    <CounterContext.Provider value={ChangeCounter}>
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
