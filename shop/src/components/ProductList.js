const ProductList = (props) => {
    const products = props.products;

    return ( 
        <div className="ProductList">
                        {products.map((product) => (
                <div className="Product-Preview" key={product.id}>
                    <h2>{ product.title }</h2>
                    <p>{ product.description }</p>
                    <div>{ product.price }</div><br />
                    <img src={product.image} alt="brak zdjęcia" width="" height="30%"/>
                </div>
            ))}
        </div>
    );
}

export default ProductList;