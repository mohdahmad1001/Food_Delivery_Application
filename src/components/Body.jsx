import React from "react";
import { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = ()=>{
    const [listofRestaurants,setListOfRestaurant] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([])

    const [searchText,setSearchText]=useState(""); 

    useEffect(()=>{
        fetchData();
    },[]) 

    const fetchData = async()=>{
        const  data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7030425&lng=77.430373&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    };
   
    const onlineStatus=useOnlineStatus();

    if(onlineStatus==false)return (
    <h1>Looks like you are offline!! Please check your internet connection

    </h1>) 


    return listofRestaurants == 0?(<Shimmer/>):(
    <div className="body">
    <div className="filter flex">
        <div className="search m-4 p-4">
            <input type="text"  className="border border-solid border-black" value= {searchText}
            onChange={(e)=>{
                setSearchText(e.target.value);
            }}
            />
            <button className="px-4 py-0.5 bg-gray-100 m-4 rounded-lg" onClick={()=>{
              
              

              const filtered_restaurant= listofRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setfilteredRestaurant(filtered_restaurant);

            }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{
            const filteredList = listofRestaurants.filter(
                (res)=>res.info.avgRating > 4);
            setListOfRestaurant(filteredList);
        }}> 
            Top Rated Restaurants</button> 
        </div>
        
    </div>
    <div className="flex flex-wrap">
      {filteredRestaurant.map((restaurant) => (
         <Link
         key={restaurant.info.id}
         to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
          ))}    
        
    </div>
    </div>
    );
}; 

export default Body;
