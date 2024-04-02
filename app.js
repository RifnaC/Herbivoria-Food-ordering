import react from "react";
import reactDom from "react-dom";
import logo from "./images/hungrezy_logo.png";
import meFod from "./images/Nadan-Kozhi-Varuthathu.webp";

const Header = () =>{
    return (
        <div className="header">
           <div className="logo-container">
                <img className="logo" src={logo}/>
           </div>
            <div className="navitems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            {/* logo 
            navitems*/}
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card">
            <img className="res-logo" src={meFod} alt="res-logo"/>
            <h3>Meghana Foods</h3>
            <h4>Nadan Kozhi Varuthathu,Indian, Asian</h4>
            <div className="res-card-footer">
                <h4>4.5 stars</h4>
                <h4>40 minutes</h4>
            </div>
        </div>
    )
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard  />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    );
}
const AppLayout = () => {
    return(
        <div className="App">
            <Header />
            <Body />
            {/* Header
            body
            footer
             */}
        </div>
    )
}

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);