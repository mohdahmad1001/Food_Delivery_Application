import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory =({data,showItems,setShowIndex})=>{

  const handleClick=()=>{
    setShowIndex(); 
  }

    return <div>
        <div className="w-6/12 bg-slate-100 mx-auto shadow-lg p-4 my-4 ">
           <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span>🔽</span>
            </div> 
           {showItems  && <ItemList items={data.itemCards}/>}
        </div>
       
    </div>
}

export default RestaurantCategory;