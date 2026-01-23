import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackBtn } from './button';
import SearchIcon from "./assets/Search.svg";
import BgrImg from "./assets/img-div.jpg"


const HomeComponent = () => {
  return(
  <div className='Container'> 
  <div className='navbar-wrapper'>
    <div className='navbar'>
      <div className='logo'>ArchiWeb</div>

      <div className='menu'>
        <p>Home</p>
        <p>Projects</p>
        <p>About</p>
        <p>Contact</p>
      </div>

      <div className='icon'> 
        <img src={SearchIcon} alt="SearchIcon" />
      </div>
    </div>

  </div>  

  <div className='hero'>
    <img src={BgrImg} alt="" />
    <div className='overlay'>
      <h1>Modern Architecture</h1>
    </div>
  </div>
  </div>  //container
  );
};

export default HomeComponent;