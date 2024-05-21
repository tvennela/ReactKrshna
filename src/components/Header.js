import { Logo } from "../utils/common";
import { useState } from "react";
import { Link } from "react-router-dom";

const Heading = () =>{
    const [btnReact, setBtnReact] = useState("Login");

    return(
    <div className="header-container">
        <div className="logo-container">
            <img className="logo" src={Logo}/>
        </div>
        <div className="nav-items">
             <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
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