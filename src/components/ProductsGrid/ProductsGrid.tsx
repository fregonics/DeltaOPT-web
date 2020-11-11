import React, { InputHTMLAttributes } from 'react';
import Product from '../../model/Product';

interface ProductProps extends InputHTMLAttributes<HTMLInputElement> {
    children: Product[] 
}

const ProductsGrid: React.FC<ProductProps> = (props) => {
    return (
        <React.Fragment>
            {
                props.children.map( (product) => {
                    return <p>{product.name}|{product.description}</p>
                })
            }
        </React.Fragment>
    )
}

export default ProductsGrid; 