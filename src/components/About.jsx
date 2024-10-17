import React from "react";

import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Web Series</h2>
          
            <UserClass name={"Ahmad"} location={"Ghaziabad"}/>
        </div>
    );
};

export default About;