import React from 'react';

const Product = (props) => {
    // console.log(props)
    return (
        <article className="product">
            <div>Produkt:</div>
            <h2 style={props.style}>{props.id}</h2>
        </article>
    );
}

export default Product;