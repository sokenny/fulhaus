import React, {useState, useEffect} from 'react';

import {MdCheck} from 'react-icons/md'
import { capitalizeSentence, containsObject } from '../../../globalAssets';

import './ProductInfo.scss'

const ProductInfo = ({product, addToCart, cartProducts}) => {

    const [opacity, setOpacity] = useState(0)
    const [inCart, setInCart] = useState(containsObject(product, cartProducts))

    useEffect(()=>{

        setOpacity(1)

    }, [])

    function handleClickAdd(e){
        e.stopPropagation()
        if(!containsObject(product, cartProducts)){
            addToCart(product)
            setInCart(true)
        }
    }

    return(

            <div className="p-info" style={{opacity}}>

                <div className="p-i-upper">

                    <div className="p-name">{capitalizeSentence(product.vendorProductName.toLowerCase())}</div>
                    <div className="p-brand">{product.vendorName}</div>

                </div>
                <div className="p-i-lower">

                    <div className="p-add">

                        {inCart ?
                            <span className="added"><MdCheck /> Added</span>
                            :
                            <span onClick={(e)=> handleClickAdd(e)}>+ Add to cart</span>
                        }
                   
                    </div>
                    <div className="p-price">${product.MSRP}</div>

                </div>

            </div>
      
    )
}

export default ProductInfo