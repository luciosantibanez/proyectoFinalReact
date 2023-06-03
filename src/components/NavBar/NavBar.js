// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="logo">
                    <Link to="/" ><h2>Ergo<span>Tech</span></h2></Link>
                </div>
                <nav className="links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/categories/shoes"></Link></li>
                        <li><Link to="/categories/clothing"></Link></li> 
                        <CartWidget/>   
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;