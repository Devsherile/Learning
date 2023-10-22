import React from "react";
import './Product.css'
function Product(){
    return(
        <div className="product">
            <div className="pro">
            <h1>Great <span className="span1">Product</span> is <span className="span2">built by great</span> <span className="span1">teams</span></h1>
            <p>We help build and manage a team of world-class developers <br />
            to bring your vision to life</p>
            <button>Let's get started</button>
            </div>
            <div className="img">
                <img src="../../software.png" alt="" />
            </div>
        </div>
    )
}
export default Product