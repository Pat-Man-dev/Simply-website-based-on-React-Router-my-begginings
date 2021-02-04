import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductPage = ({ match }) => {
    // console.log(match);
    return (
        <>
            <div style={{ marginBottom: 30 }}>Strona produktu</div>
            <Product style={{ textTransform: 'uppercase' }} id={match.params.id} />
            <Link style={{ display: 'block', marginTop: 30 }} to='/products'>Wróć do listy produktów</Link>
        </>
    );
}

export default ProductPage;