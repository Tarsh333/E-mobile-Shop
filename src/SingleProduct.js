import React from 'react'
import data from './Data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'



function SingleProduct(props) {
    const [product, setProduct] = React.useState({})
    const { id } = (useParams())
    React.useEffect(() => {
        const P = data.filter((data) => { return (data.id === parseInt(id)) })[0]
        setProduct(P)
    }, [])
    return (
        <div>
            <h2 style={{ textAlign: 'center', margin: '80px 0px 40px 0px', fontSize: '40px', color: 'blue', fontWeight: 'normal' }}>{product.name}</h2>
            {product.id}

            <div style={{ display: 'flex' }} className='single-product-container'>
                <div  style={{ width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={`.${product.image}`} alt={product.name} style={{
                        width: '200px',
                        height: '350px'
                    }} />
                </div>
                <div  className='single-product-details'>
                    <p className='font-25'>Model: {product.name}</p>
                    <p className='font-25'>Price: {product.price}</p>
                    <p className='font-25'>Some Info About Product: </p><p style={{color:'grey',marginBottom:'20px'}}>{product.description}</p>
                    <button onClick=
                        {!product.isInCart ? (() => {
                            props.addToCart(product.id);
                            console.log('clicked');
                        }) : undefined}
                        disabled={product.isInCart}
                        className='modal-content-a'
                        style={{backgroundColor:'white'}}
                    >
                        {product.isInCart ? <span>In Cart</span> : <span>Add To Cart</span>}
                    </button>
                    <Link to='/products' className='modal-content-button back-to-products'>Back To Products</Link>
                </div>
                </div>
            </div>
            )
}

            export default SingleProduct
