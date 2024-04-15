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

const restObj = {
    "sections": {
        "SECTION_SEARCH_RESULT": [
            {
                "type": "restaurant",
                "info": {
                    "resId": 20930027,
                    "name": "Melt House",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20930027\/c5c3a015a650b687981efb2400aa3230_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20930027\/c5c3a015a650b687981efb2400aa3230_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/7\/20930027\/65b6360e3faa0dbe8ad7e7c25ed38b68_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.4",
                        "rating_text": "4.4",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "474",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.4",
                                "reviewCount": "474",
                                "reviewTextSmall": "474 Reviews",
                                "subtext": "474 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.4",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "grey",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9500 for one"
                    },
                    "locality": {
                        "name": "M Block Market, Greater Kailash 2 (GK2), New Delhi",
                        "address": "74, 2nd Floor, Block M, Road 5, Greater Kailash 2 (GK 2), New Delhi",
                        "localityUrl": "ncr\/restaurants\/in\/m-block-market-greater-kailash-2-gk2"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/cafes\/",
                            "name": "Cafe"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/coffee\/",
                            "name": "Coffee"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/ncr\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,200 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": true,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": true
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/ncr\/melt-house-greater-kailash-gk-2-new-delhi\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "10.8 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"search_id\":\"c2ddc390-1622-4c88-b8f5-4d175ce205e1\",\"location_type\":\"delivery_cell\",\"location_id\":\"4110939063815503872\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"20930027\",\"element_type\":\"listing\",\"rank\":22}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [
                    {
                        "type": "booking_cta",
                        "text": "Book a Table",
                        "clickUrl": "\/ncr\/melt-house-greater-kailash-gk-2-new-delhi\/book"
                    },
                    {
                        "type": "chain_cta",
                        "text": "View all outlets",
                        "clickUrl": "\/ncr\/restaurants\/melt-house?category=2"
                    }
                ],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            }
        ]
    }
};
const cuisines = restObj.sections.SECTION_SEARCH_RESULT[0].info.cuisine;

const CuisineCard = (
    <div className="cuisine-card">
        <h4>{cuisines.map(cuisine => cuisine.name).join(", ")}</h4>
    </div>
);
console.log(restObj)
console.log(restObj.sections.SECTION_SEARCH_RESULT[0].info.cuisine);

// const styleCard ={
//     backgroundColor:"#f0f0f0"
// }
const RestaurantCard=(props)=>{
    const {restData} = props;
    return(
        <div className="rest-card" style= {{
            backgroundColor:"#f0f0f0",
        }}>
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/9/1dbdf671-cbed-4fc1-8b43-faa0165112e9_107452.JPG"></img>
            <h3>{restObj.sections.SECTION_SEARCH_RESULT[0].info.name}</h3>
            {CuisineCard}
            <h4>{restObj.sections.SECTION_SEARCH_RESULT[0].info.rating.aggregate_rating}</h4>
            <h4>{restObj.sections.SECTION_SEARCH_RESULT[0].info.cfo.text}</h4>
            <h4>{restObj.sections.SECTION_SEARCH_RESULT[0].info.cft.text}</h4>
        </div>
    );
};
const Body =()=>{
    return(
    <div className="body">
        <div className="Search"> Search </div>
        <div className="restro_container">
          <RestaurantCard restData={restObj}/>
          {/* <RestaurantCard restName="KFC" cuisine="Burger, fast food" rating="5⭐"/> */}
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