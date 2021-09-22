import { useContext } from "react";
import { CounterContext } from "../App";

const Navbar = () => {

    const {Counter, ChangeCounter} = useContext(CounterContext);

    return ( 

        <nav className="Navbar">
            <h1 className="Header">The Great Car Dealer</h1>
            <a href="/"className="Home">Home</a>
            <a href="/Products"className="Products">Products</a>
            <a href="/Contact" className="Contact">Contact</a>
            <a href="#" className="Cart">Shopping cart <span className="Badge">{Counter}</span></a><br /> 
        </nav>
        
    );
}

export default Navbar;