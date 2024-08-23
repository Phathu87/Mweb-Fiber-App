import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.productName}</h3>
            <p>Provider: {product.provider}</p>
            <p>Price: R{product.productRate}</p>
        </div>
    );
};

export default ProductCard;
