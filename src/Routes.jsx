import React from "react";
import {useRoutes} from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/Landing/Landing";
const ProjectRoutes =()=>{
    let element = useRoutes([
        {path: "/",element:<LandingPage/>},
        // {path:"*",element:<NotFound/>},
        
    ]);
    return element;
};

export default ProjectRoutes;