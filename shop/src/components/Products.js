import { useEffect, useState } from "react";
import ProductList from "./ProductList";

const Products = () => {
    const [products, setProducts] = useState (null);

    useEffect (() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProducts(data);
            })
    }, []);
    
    return ( 
        <div className="ProductList">
            {products && <ProductList products={products} />}
        </div>
    );
}

export default Products;