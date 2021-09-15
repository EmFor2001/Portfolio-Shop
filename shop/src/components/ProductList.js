import Card from "./Card";

const ProductList = (props) => {
    const products = props.products;


    return ( 
        <div className="ProductList" >
            {products.map((product) => (
                <Card product={product} key={product.id} />))}
        </div>
    );
}

export default ProductList;