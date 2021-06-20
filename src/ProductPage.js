import React from 'react'
import Product from './product'
function ProductPage(props) {
    return (<div>
        <h2 style={{textAlign:'center',margin:'50px 0px 30px 0px',fontSize:'40px',color:'blue'}}>Our Products</h2>
        <div className="products">{props.productData.map((data) => {
            return (<Product name={data.name}
                key={data.id}
                id={data.id}
                isInCart={data.isInCart}
                image={data.image}
                price={data.price}
                modalView={props.modalView}
                addToCart={props.addToCart}
            />)
        })}</div>
    </div>

    )
}

export default ProductPage
