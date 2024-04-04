import RestaurantCard from "./RestaurantCard";
import resList from "../utils/datas";
const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{console.log("Button Clicked")}}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {resList.map((res) =><RestaurantCard key={res.info.id} resData={res}/>
                )}
            </div>
        </div>
    );
}

export default Body;