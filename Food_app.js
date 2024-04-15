/**
 * Header
 * - logo
 * - nav item
 * Body
 * - search bar
 * - Restraunt container
 *    - RestaurantCard
 *      - Name of restro
 *      - Star rating
 *      - cuisines
 *      - dilivery time
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

// const styleCard ={
//     backgroundColor:"#f0f0f0"
// }
const RestaurantCard=(props)=>{
    console.log(props);
    return(
        <div className="rest-card" style= {{
            backgroundColor:"#f0f0f0",
        }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/1dbdf671-cbed-4fc1-8b43-faa0165112e9_107452.JPG"></img>
            <h3>{props.restName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>{props.rating}</h4>
            <h4>38 mins</h4>
        </div>
    );
};
const Body =()=>{
    return(
    <div className="body">
        <div className="Search"> Search </div>
        <div className="restro_container">
          <RestaurantCard restName="Meghna foods" cuisine="Biryani, North /indian, Asian" rating="4.8⭐"/>
          <RestaurantCard restName="KFC" cuisine="Burger, fast food" rating="5⭐"/>
        </div>
    </div>
    );
};

const AppLayout =() =>{
    return (
        <div className="app">
          <Header />   
          <Body />
        </div>
    );
};

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);