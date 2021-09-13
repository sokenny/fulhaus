import React, {useState, useEffect, useRef} from 'react';

import axios from 'axios';

import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import Products from '../../components/Products/Products'
import Cart from '../../components/Cart/Cart'

import { containsObject } from '../../globalAssets';


const Home = () => {

    const [showCart, setShowCart] = useState(false)
    const [products, setProducts] = useState([])

    const [cartProducts, setCartProducts] = useState([])

    useEffect(()=>{

        let cart = JSON.parse(localStorage.getItem('cart'))
        if(cart.length>0){
            setCartProducts(cart)
        }

        axios.get('https://main-api.fulhaus.com/fulhaus-tech-test/get-products')
        .then(response => {
          setProducts(response.data)
        });

    }, [])


    const banner = {
        image: 'fulhaus-banner.jpg',
        title: "Patio Furniture",
        cta: {  text: "Shop", 
                action: ()=> {
                    document.querySelector('.products-container').scrollIntoView({ behavior: 'smooth' })
                    closeCart()
                }
             }
    }

    function addToCart(product){        
        setCartProducts([...cartProducts, product])
    }

    function removeFromCart(product){   
        let cartCopy = [...cartProducts]
        for(let o in cartCopy){
            if(cartCopy[o]._id === product._id){
                cartCopy.splice(o, 1)
                setCartProducts(cartCopy)
            }
        }     
    }

    useEffect(()=>{
    })

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cartProducts))
    }, [cartProducts])

    function closeCart(){

        showCart &&
        document.querySelector('.cart').classList.remove("slided")
        setTimeout(() => {
            setShowCart(false)
        }, 200);

    }
    

    return(
            <>
              <Nav showCart={showCart} setShowCart={setShowCart} closeCart={closeCart} />
              
              <div className="main-container" onClick={()=>closeCart()}>
                <Banner image={banner.image} title={banner.title} cta={banner.cta} />

                {showCart &&
                    <Cart cartProducts={cartProducts} removeFromCart={removeFromCart} emptyAction={banner.cta.action} />
                }
                <Products products={products} addToCart={addToCart} cartProducts={cartProducts} />


              </div>
              
            </>
    )
}

export default Home