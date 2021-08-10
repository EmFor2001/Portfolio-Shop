import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState (null);

    useEffect (() => {
        fetch('http://localhost:8000/products')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, []);
    
    return ( 
        <div className="productList">
            Here will be some products!!!
        </div>
    );
}

export default ProductList;