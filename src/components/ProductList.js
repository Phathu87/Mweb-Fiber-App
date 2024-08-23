import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
    if (!products || products.length === 0) {
        return <p>No products available.</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.productCode} product={product} />
            ))}
        </div>
    );
};



export default ProductList;
