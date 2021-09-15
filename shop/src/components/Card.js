import { useState } from "react";

const Card= ({ product }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
    <div className="Product-Preview" onClick={() => setShowDescription(!showDescription)}>
        <div className="backdrop" style={{ backgroundImage: `url(${product.image})` }}></div>
        <h2>{product.title}</h2>
        {showDescription && <p>{product.description}</p>}
        <div>{product.price}</div>
        <br />
    </div>
    );
};

export default Card;