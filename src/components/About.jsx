import React from "react";
import './About.css'
function About(){
    return(
        <div className="about" id="about">
             <div>
                <img src="../../webbb.png" alt="" width={500} height={400}
                className="image"
                />
            </div>
            <div>
            <h1>About Us</h1>
            <h2><span>West Pokot Developer Club</span> was founded by Sherile on May,2023</h2>
            <p>Since then we have been consistently adding developers to our team <br />
            and we offer a lot of services.</p>
            <h2>All in all,we are looking forward to opening tech classes for new people in the field</h2>
            <button className="btn3">Read More</button>
            </div>
           
        </div>
    )
}
export default About