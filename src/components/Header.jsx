import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = ()=>{
    const [btnNameReact,setbtnNameReact]=useState("Login")

   const onlineStatus=useOnlineStatus();

   const cartItems = useSelector((store)=>store.cart.items)
   console.log(cartItems)
    

    return (
    
  
        <div className="flex justify-between shadow-lg m-2  ">
            
            <div className="logo-conatiner">
                <img
                className="w-52 " 
                src ={LOGO_URL}/>
            </div>
            <div className="nav-items flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">
                    Online status:{onlineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-4 hover:bg-slate-400 ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4  hover:bg-slate-400 ">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4  hover:bg-slate-400">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4  hover:bg-slate-400 ">
                        <Link to="/cart">Cart({cartItems.length} items)</Link>
                    </li>
                    <button className="login px-4  hover:bg-slate-400 " onClick={()=>{btnNameReact == "Login" ?setbtnNameReact("Logout"):setbtnNameReact("Login");
                }}>
                    {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
        
       
    );
  };

  export default Header;