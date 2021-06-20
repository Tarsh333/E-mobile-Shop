import React from 'react'
import { FaShoppingCart, FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Nav(props) {
    return (
        <div className='nav'>
            <Link to='/' className='home-link'><FaHome /></Link>
            <Link to='/products' style={{ marginLeft: '70px', fontSize: '25px' }}>Products</Link>
            <Link to='/cart' className='cartIcon'><FaShoppingCart /><span style={{ position:'absolute',bottom:'10px',right:'2px' }}> My Cart</span><span style={{
                position: 'absolute',
                width: '25px',
                height: '25px',
                backgroundColor: 'rgb(255 0 213)',
                textAlign: 'center',
                border: '2px solid #fffdfd',
                borderRadius: '18px',
                left: '20px'
            }}> {props.cartno}</span></Link>



        </div>
    )
}

export default Nav
