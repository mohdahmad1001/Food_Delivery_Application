import React from "react"
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const AppLayout =()=>{
    return (
      <Provider store={appStore}>
        <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

        </Provider>
        
    )
}

const appRouter =createBrowserRouter([
    {
        path: "/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element:<About/>,
            },
            {
                path: "/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }, 
             {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)