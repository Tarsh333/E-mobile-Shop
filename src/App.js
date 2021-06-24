
import React from 'react'
import './App.css';
import Nav from './Nav'
import Data from './Data'
import Modal from './Modal';
import { Route, Switch } from 'react-router-dom'
import ProductPage from './ProductPage';
import HomePage from './HomePage';
import CartPage from './CartPage';
import SingleProduct from './SingleProduct';
import ErrorPage from './ErrorPage';
const getLocalStorage=()=>{
  let cart=localStorage.getItem('cart')
  if (cart) {
    return (cart=JSON.parse(localStorage.getItem('cart')))
  } else {
    return []
  }
  }
function App() {


  const [cart, setCart] = React.useState(getLocalStorage())
  const [showModal, setShowModal] = React.useState(false)
  const [modalData, setModalData] = React.useState()
  const [productData, setProductData] = React.useState(Data)


React.useEffect(() => {
  localStorage.setItem('cart',JSON.stringify(cart))
}, [cart])
React.useEffect(() => {
  if (cart.length!==0) {
    const cartIds=cart.map((data)=>{return(parseInt(data.id))})
    const initialProductData=productData.map((data)=>{
      if (cartIds.includes(parseInt(data.id))) {
        data.isInCart=true
      }
      return data
    })
    setProductData(initialProductData)
  }
}, [])
  const modalView = (id) => {
    let dataModal = productData.filter((data) => { return (data.id === id) })
    setModalData(dataModal[0])
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)

  }

  const addToCart = (id) => {
    let newData = productData.map((data) => {
      if (id === data.id) {
        data.isInCart = true
        setCart([...cart, { ...data, qty: 1 }])
      }
      return data
    })
    setProductData(newData)
  }

  const removeFromCart = (id) => {
  let newData= productData.map((data) => {
    if (data.id === id) {
      data.isInCart=false
    }
    return data
  })
   setProductData(newData)
   let newCart=cart.filter((data)=>{return(data.id!==id)})
   setCart(newCart)
  }

  const cartInc = (id) => {
    let updatedCart = cart.map((data) => {
      if (data.id === id) {
        let newQty = data.qty + 1
        data.qty = newQty
      }
      return data
    })
    setCart(updatedCart)
  }
var indexToRemove;
const cartDec = (id) => {
  let updatedCart = cart.map((data, index) => {
    if (data.id === id) {
      
      let newQty = data.qty - 1
      if (newQty<1) {
        indexToRemove=index
        removeFromCart(data.id)
      }
      data.qty = newQty
    }
    return data
  })
  if (indexToRemove!==undefined) {
    
    console.log(indexToRemove)
    updatedCart.splice(indexToRemove,1)
  }
  setCart(updatedCart)
}

var total=0
for (const data of cart) {
  total+=(parseInt(data.price))*(parseInt(data.qty))
}
const clearCart=()=>{
  setCart([])
  let newData=productData.map((data)=>{
    data.isInCart=false
    return data
  })
  setProductData(newData)
}

return (
  <div className="App">
      <Nav cartno={cart.length} />
      <Switch>
        <Route exact path="/"> <ProductPage
            productData={productData}
            modalView={modalView}
            addToCart={addToCart} />
          {showModal && <Modal {...modalData} closeModal={closeModal} />}</Route>
        <Route exact path="/product/:id" children={<SingleProduct addToCart={addToCart}/>}></Route>
        <Route exact path="/cart">
          <CartPage
            cartContent={cart}
            cartInc={cartInc}
            cartDec={cartDec}
            total={total}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </Route>
        <Route exact path="/Products">
          <ProductPage
            productData={productData}
            modalView={modalView}
            addToCart={addToCart} />
          {showModal && <Modal {...modalData} closeModal={closeModal} />}</Route>
        <Route exact path="*"><ErrorPage/></Route>
      </Switch>


    </div>
  );
}

export default App;
