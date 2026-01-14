import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px"
      }}
    >
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Home</div>
      </Link>

      <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Product</div>
      </Link>

      <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>About</div>
      </Link>

      <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Contact</div>
      </Link>

      <Link to="/profile" style={{ textDecoration: "none", color: "black" }}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Profile</div>
      </Link>
    </div>
  )
}

export default Navbar;
