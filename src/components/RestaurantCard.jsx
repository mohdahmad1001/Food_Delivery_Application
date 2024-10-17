import React from "react";
import  {CDN_URL}  from "../utils/constants";


const RestaurantCard = ({resData})=>{
    const {
      cloudinaryImageId,
      name,
      avgRating,
      cuisines,
      costForTwo,
      
    }=resData?.info;
    const{
      deliveryTime
    }=resData?.info?.sla;
    return(
      <div className="m-4 p-4 w-[225px] h-[450px] rounded-lg bg-slate-100 hover:bg-slate-400 hover:border-solid hover:border-black hover:border text-black " >
          <img className="rounded-lg h-[200px] w-[195px]" 
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
          />
          <h3 className="font-bold py-2 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} minutes</h4>
      </div>
  )
  }

  export default RestaurantCard;
