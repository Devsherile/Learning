import React from "react";
import './Hero.css'
function Hero(){
    return(
        <div className="main">
        <div className="content">
            <h1>Landing page for <span>developers</span><br />and startups</h1>
            <p>This is a simple landing page using React</p>
            <div className="btn">
            <button className="btn1">Explore</button>
            <button className="btn2">Learn More</button>
            </div>
        </div>
        <div>
            <img src="../../sw.jpg" alt="" 
            width={300}
            height={300}
            />
        </div>
        </div>
    )
}
export default Hero