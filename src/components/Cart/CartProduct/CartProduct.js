import React from 'react';

import { MdClose } from 'react-icons/md'
import { capitalizeSentence } from '../../../globalAssets';

import './CartProduct.scss'

const CartProduct = ({product, removeFromCart}) => {

    return ( 

        <div className="cart-product">
            <div className="c-p-remove" onClick={()=>removeFromCart(product)}>
                <MdClose size={28} />
            </div>

            <div className="c-p-img" style={{backgroundImage: `url('${product.imageURLs[0]}')`}}>
            </div>

            <div className="c-p-information">
                <div className="c-p-i-upper">
                    <div className="c-p-name">{capitalizeSentence(product.vendorProductName.toLowerCase())}</div>
                    <div className="c-p-brand">{product.vendorName}</div>
                </div>

                <div className="c-p-i-lower">
                    <div className="c-p-price">${product.MSRP}</div>
                </div>
            </div>
        </div>

     );
}
 
export default CartProduct;