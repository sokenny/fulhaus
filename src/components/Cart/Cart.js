import React, {useState, useEffect} from 'react';

import CartProduct from './CartProduct/CartProduct';


import './Cart.scss'

const Cart = ({cartProducts, removeFromCart, emptyAction}) => {

    const [slide, setSlide] = useState(false)
    const [total, setTotal] = useState(null)

    useEffect(()=>{
        setSlide(true)
    }, [])   

    useEffect(()=>{
        let total = 0
        for(let c in cartProducts){
            total += cartProducts[c].MSRP
        }

        setTotal(total.toFixed(2))
    }, [cartProducts])


    return(
            <div className={slide ? "cart slided" : "cart"} onClick={(e)=>e.stopPropagation()}>
                
                <div className="cart-products" >

                    {cartProducts.map((product)=>
                    
                    <CartProduct product={product} key={product._id} removeFromCart={removeFromCart} />

                    )}

                    {cartProducts.length < 1 &&
                        <div className="cart-empty" onClick={()=>emptyAction()}>
                            <div>Cart is empty,  go shopping.</div>
                        </div>
                    }

                </div>

                <div className="cart-payment" >

                    <div className="cp-detail">
                        <div>Total</div>
                        <div>${total}</div>
                    </div>
                    <div className="main-btn" onClick={()=>window.location.href="https://artesano.dev"}>Checkout</div>

                </div>

            </div>
    )
}

export default Cart