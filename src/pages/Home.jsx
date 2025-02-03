import React from "react";

import { Link } from "react-router-dom";
const Home=()=>{
    return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/landing" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Landing
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/login" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Login
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/home1" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Home1
          </Link>
        </li>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/profile" style={{ color: "#87CEFA", textDecoration: "none" }}>
            Profile
          </Link>
        </li>
      </ul>
    </div>
    )
};
export default Home;