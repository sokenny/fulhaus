import React from 'react';

import './Nav.scss'

const Nav = ({showCart, closeCart, setShowCart}) => {

    return(
           
           <nav className="main-padding">

               <div className="identity">
                    Fülhaus Shop
               </div>

               {!showCart ?
                <button className="main-btn" onClick={()=>setShowCart(true)}>
                        Cart
                </button>
               :
               <button className="main-btn" onClick={()=>closeCart()}>
                        Close
                </button>
               }

           </nav>
    )
}

export default Nav