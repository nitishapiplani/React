/**
 * Header
 * - logo
 * - nav item
 * Body
 * - search bar
 * - Restraunt container
 *    - RestaurantCard
 * Footer
 * - coopyright
 * - Links
 * - Address
 * - Contract
 */

import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo_container">
                <img className="logo" src="https://img.freepik.com/free-vector/hand-draw-spicy-logo-design_23-2149613477.jpg?t=st=1712833370~exp=1712836970~hmac=8895afe33a98c53936337fb1c52557bd09ced87673ec78bdba5307c6854187d8&w=740" />
            </div>  
            <div className="nav_items">
                <ul className="nav_list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>  
        </div>
    );
};

const AppLayout =() =>{
    return (
        <div className="app">
          <Header />   
        </div>
    );
};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);