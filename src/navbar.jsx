import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";



/* ✅ Wrapper NI O‘ZINGIZ YARATASIZ */
const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  border: 1px solid blue;
  :hover {
    text-decoration: underline;
    color: blue;
  }

  div {
    border: 1px solid green;
    padding: 5px 10px;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a.active div {
    background: black;
    color: white;
  }
`;

function Navbar() {
  return (
    <Wrapper>
      <NavLink to="/home"> <div>Home</div> </NavLink>
      <NavLink to="/product"> <div>Products</div> </NavLink>
      <NavLink to="/contact"> <div>Contact</div> </NavLink>
      <NavLink to="/about"> <div>About</div> </NavLink>
      <NavLink to="/profile"> <div>Profile</div> </NavLink>
    </Wrapper>
  );
}

export default Navbar;
