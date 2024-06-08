import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div><h3 className="title">
                Website</h3></div>

            <div>
                <ul className={menuOpen ? "open" : ""}>

                    <li>
                        <NavLink className="focus" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="focus" to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className="focus" to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink className="focus" to="/contact">Contact</NavLink>
                    </li>

                    <li>
                        <NavLink className="focus" to="/Signup">Signup</NavLink>
                    </li>

                     <li>
                     <NavLink className="focus" to="/Signout">Signout</NavLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};