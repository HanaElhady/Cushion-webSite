import './Products.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { productsData } from './productsData';


export default function Products({ productsData = []} ) {
    return (
        <div className="productsGrid">
            {productsData.map(product => (
                <div className="Productscontainer" key={product.id}>
                    <div className="cushionImage">
                        <img 
                            src={product.image}
                            alt={product.title}
                        />
                    </div>
                    <br />
                    <div className="CushionLink">
                        <Link to={`/Product/${product.id}`}>
                            {product.title}
                        </Link>
                    </div>
                    <div className="price">
                        <h1>&#36; {product.price} USD</h1>
                    </div>
                </div>
            ))}
        </div>
    );
}
