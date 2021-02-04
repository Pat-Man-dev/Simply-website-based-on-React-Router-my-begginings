import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductsPage.css';

const productsList = ['car', 'ship', 'plane'];

const ProductsPage = () => {

    const list = productsList.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return (
        <div className="products">
            <h2>Lista produktów:</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default ProductsPage;