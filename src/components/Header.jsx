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
                    <li>About</li>
                    <li>Mission</li>
                    <li>Product</li>
                </ul>
                <button>Contact</button>
            </header>
        </div>
        
        
    )
}
export default Header