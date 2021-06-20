import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom'
function Modal({ name, image, closeModal,price }) {
    React.useEffect(() => {
        window.addEventListener(('click'),console.log('window clicked'))
       
    },[])
    return (

        <div className="modal-container">
            <div className="modal-content">
                <p style={{fontSize:'20px'}}>Item Added To Cart</p>
                <FaWindowClose className="close-btn" onClick={() => { closeModal() }} />
                <img src={image} alt={name} style={{
                        width: '200px',
                        height: '350px'
                    }}/>
                <p style={{fontSize:'20px',textAlign:'center'}}>{name} <br/> Price:{price}</p>
                <div className='modal-footer'>    <button className='modal-content-button' onClick={() => { closeModal() }}>Continue shopping</button>         <Link to='/cart' className='modal-content-a' onClick={() => { closeModal() }}>Go To Cart</Link>

                    </div>

            </div>
        </div>

    )
}

export default Modal
