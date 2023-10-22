import { React } from "react";
import './Header.css'
function Header(){
    return(
        <div>
            <header>
                <h1>
                    {/* <img src="assets/sw.jpg" alt="" /> */}
                    Logo
                </h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#miss">Mission</a></li>
                    <li><a href="#product">Product</a></li>
                </ul>
                <button className="contact">Contact</button>
            </header>
        </div>
        
        
    )
}
export default Header