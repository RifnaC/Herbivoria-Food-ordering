const RestaurantCard = ({resData}) => {
    const{cloudinaryImageId, name,cuisines,costForTwo,avgRating,sla} = resData?.info
    return (
        <div className="restaurant-card">
            <img className="res-logo" src={+cloudinaryImageId} alt="res-logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <div className="res-card-footer">
                <h4>{avgRating} stars</h4>
                <h4>{sla.deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCard;