import { useEffect, useState } from "react";
import Restaurent from "./Restaurent";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listofRestaurants, setlistofRestaurants] = useState([]);

    useEffect(() =>{
        fetchData();
    },[])

const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setlistofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};
 
    return listofRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body-container">
            <div className="btn-body">
                <div className="btn-search">
                    <button onClick={() => {
                        const filterData = listofRestaurants.filter((res) => res.info.avgRating >= 4.5)
                        setlistofRestaurants(filterData);
                        }}>Top Rated Restaurents</button>
                </div>
           </div>
           <div className="res-container">
            {
                listofRestaurants.map((rst) =>(
                    <Restaurent  key = {rst.info.id} resData = {rst}/>
                ))
            }
           </div>
        </div>
    );
}

export default Body;