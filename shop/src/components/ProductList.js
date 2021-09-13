const ProductList = (props) => {
    const products = props.products;
    

    return ( 
        <div href="/${product.id}" className="ProductList">
                        {products.map((product) => (
                <div className="Product-Preview" key={product.id} style={{backgroundImage: `url(${product.image})`}}>
                    <h2>{ product.title }</h2>
                    <p>{ product.description }</p>
                    <div>{ product.price }</div><br />
                </div>
            ))}
        </div>
    );
}

export default ProductList;