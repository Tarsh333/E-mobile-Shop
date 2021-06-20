import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Product({ name, id, image, isInCart, modalView, addToCart, price }) {
    return (


        <div className="product-card">
            <Link to={`/product/${id}`}>
                <img
                    src={image}
                    alt={`${name} mobile`}
                    className="product-image"
                />
            </Link>


            <p><span>{name}</span><span>{price}</span></p>

            <button onClick=
                {!isInCart ? (() => {
                    addToCart(id);
                    modalView(id)
                }) : undefined}
                disabled={isInCart}
                className="product-btn"
            >
                {isInCart ? <span style={{
                    display: 'inline-block',
                    border: '2px solid rgb(0 185 255)',
                    borderTopLeftRadius: '5px',
                    backgroundColor: 'rgb(0 185 255)',
                    color: 'white',
                    padding: '6px 10px',
                    fontSize: '20px',
                }}>In Cart</span> : <FaCartPlus className="add-to-cart" />}
            </button>

        </div >
    )
}

export default Product
