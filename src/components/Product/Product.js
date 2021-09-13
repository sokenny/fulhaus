import React, {useEffect, useState} from 'react';

import ProductInfo from './ProductInfo/ProductInfo'

import './Product.scss'

const Product = ({product, addToCart, cartProducts}) => {
    
    const [showInfo, setShowInfo] = useState(false)

    useEffect(()=>{
        console.log('seshin, ', showInfo)
    })

    return(
            
        <div className="product" onMouseEnter={()=>setShowInfo(true)} onMouseLeave={()=>setShowInfo(false)} style={{backgroundImage: `url('${product.imageURLs[0]}')`}}>

            {showInfo && 
                <ProductInfo product={product} addToCart={addToCart} cartProducts={cartProducts} />
            }
            
        </div>
            
    )
}

export default Product