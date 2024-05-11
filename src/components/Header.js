import { Logo } from "../utils/common";
import { useState } from "react";

const Heading = () =>{
    const [btnReact, setBtnReact] = useState("Login");

    return(
    <div className="header-container">
        <div className="logo-container">
            <img className="logo" src={Logo}/>
        </div>
        <div className="nav-items">
             <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <button className="btn" onClick={() => {
                   btnReact ==="Login" ? setBtnReact("Logout") : setBtnReact("Login")
                }}>{btnReact}</button>
             </ul>
        </div>
    </div>
    );
}

export default Heading;