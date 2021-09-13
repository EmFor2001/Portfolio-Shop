const ProductList = (props) => {
    const products = props.products;


    return ( 
        <div className="ProductList" >
            {products.map((product) => (
                <div className="Product-Preview" key={product.id}>
                    <div className="backdrop" style={{backgroundImage: `url(${product.image})`}}></div>
                    <h2>{ product.title }</h2>
                    <p>{ product.description }</p>
                    <div>{ product.price }</div><br />
                </div>
                
            ))}
        </div>
    );
}

export default ProductList;