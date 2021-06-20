import React from 'react'
import { AiFillDelete} from "react-icons/ai";
import StripeButton from './StripeButton';
function CartPage(props) {


    return (
        <div>
            {(props.cartContent.length) > 0 ?
                (<><h2 style={{textAlign:'center',margin:'30px 0px 20px 0px',fontSize:'40px',color:'blue'}}>Your Cart</h2>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>qty</th>
                            <th>Remove</th>
                            <th>total</th>
                        </tr>
                    {
                        props.cartContent.map((data, index) => {
                            return (
                                <tr key={index}>
                                    <td><img src={data.image} alt={data.name}/></td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td>
                                        <button onClick={() => { props.cartInc(data.id) }}>+</button>
                                       <span className='prdt-qty'>
                                           {data.qty}
                                           </span> 
                                        <button onClick={() => { props.cartDec(data.id) }}>-</button>
                                    </td>
                                    <td><AiFillDelete onClick={()=>{props.removeFromCart(data.id)}}/></td>
                                    <td style={{fontWeight:'bold'}}>Item Total: {(parseInt(data.price))*(parseInt(data.qty))}$</td>
                                </tr>)
                        })
                    }
                    </table> 
                    <button onClick={()=>{props.clearCart()}} className='clear-cart'>Clear Cart</button>
                    <p className='total'>Subtotal: {parseInt(props.total)}$</p>
                    <p className='total'>Tax: {(parseInt(props.total))/10}$</p>
                    <p className='total'>Total :{parseInt(props.total)+parseInt(props.total)/10} $</p>
                   <div style={{width:'120px',marginLeft:'auto',marginRight:'160px',marginTop:'10px'}}> <StripeButton totalAmount={parseInt(props.total)+parseInt(props.total)/10} /></div>
                </>)
                :
                (<h2 style={{textAlign:'center',margin:'10px 0px',fontSize:'40px',color:'blue'}}>Your Cart is empty</h2>)}

        </div>
    )
}

export default CartPage
