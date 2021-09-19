const Navbar = () => {

    return ( 
        <nav className="Navbar">
            <h1 className="Header">The Great Car Diller</h1>
            <a href="/"className="Home">Home</a>
            <a href="/Products"className="Products">Products</a>
            <a href="/Contact" className="Contact">Contact</a>
            <a href="/Cart" className="Cart">Shopping cart <span className="Badge">0</span></a><br /> 
        </nav>
        
    );
}

export default Navbar;