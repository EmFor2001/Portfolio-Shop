import { useContext, useState } from "react";
import { CounterContext } from "../App";


const Card= ({ product }) => {
    const [showDescription, setShowDescription] = useState(false);
    const ChangeCounter = useContext(CounterContext);

    return (
        <div className="Product-Preview" >
            <div className="backdrop" style={{ backgroundImage: `url(${product.image})` }}></div>
            <h2>{product.title}</h2>
            <div>{product.price}</div>
            <button className="ShowDescription" onClick={() => setShowDescription(!showDescription)}>Details</button>
            <button className="AddToCart" onClick={() => ChangeCounter()}>Add To Cart </button> 
            {showDescription && <p>{product.description}</p>}
            <br />
        </div>
    );
};

export default Card;