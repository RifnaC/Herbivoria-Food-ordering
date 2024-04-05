import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/datas";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants]=useState(resList)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                
                    const filteredRestaurants = listOfRestaurants.filter(res => res.info.avgRating > 4);
                    setListOfRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((res) =><RestaurantCard key={res.info.id} resData={res}/>
                )}
            </div>
        </div>
    );
}

export default Body;