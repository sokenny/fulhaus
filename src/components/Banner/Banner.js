import React, {useState, useEffect} from 'react';

import './Banner.scss'

const Banner = ({image, title, cta}) => {


    return(
           
           <header>
            
                <div className="header-image" style={{backgroundImage: `url('imgs/${image}')`}}>

                </div>

                <div className="header-text">

                    <h1>{title}</h1>

                    <button className="main-btn" onClick={()=>cta.action()}>
                        {cta.text}
                    </button>

                </div>

           </header>
    )
}

export default Banner