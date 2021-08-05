const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1 className="Header">The Greate Car Diller</h1>
            <a href="/Home"className="Home">Home</a>
            <a href="/ProductsList"className="Products">Products List</a>
            <a href="/Contact" className="Contact">Contact</a>
        </nav>
    );
}

export default Navbar;