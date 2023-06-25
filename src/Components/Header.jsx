import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";
function Header(){
    return <div className="container flex-container">
        <NavLink to="/"><h1>Logo</h1></NavLink>
        <div>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/courses"><li>Services</li></NavLink>
                <NavLink to="/login"><li>Login</li></NavLink>
            </ul>
        </div>
    </div>
}
export default Header;