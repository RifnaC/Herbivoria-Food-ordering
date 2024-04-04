import logo from "..//../images/hungrezy_logo.png";
export const Header = () =>{
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
        </div>
    )
}
export default Header;