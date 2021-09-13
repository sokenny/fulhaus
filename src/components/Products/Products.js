import React, {useState, useEffect} from 'react';

import Product from '../Product/Product'
import { generateRows } from '../../globalAssets';

import './Products.scss'

const Products = ({products, addToCart, cartProducts}) => {
    
    const [rows, setRows] = useState(generateRows(products))

    useEffect(()=>{
        setRows(generateRows(products))
    }, [products])

    return(
            <main className="products-container">
                

                {rows.map((row)=>

                    <div className="pc-row">
                    {row.map((product)=>
                        
                        <Product product={product} key={product._id} addToCart={addToCart} cartProducts={cartProducts} />
                        
                        )}
                    </div>

                )}
            </main>
    )
}

export default Products