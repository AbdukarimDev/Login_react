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
      <div className='div-shape'>
        <h1>Best Solution For 
Your Home</h1>
<p>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit ut 
aliquam, purus sit amet </p>
      </div>
      
    </div>
  </div>

<div 
style={{
  width: "100%",
  height: "284px",
  background: "rgba(37, 77, 77, 0.20)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px",
  display: "flex",
  flexDirection:"column"}}>

    <h1 className='Services-txt'>Our Services</h1>

    <div style={{
      display: "flex",
      border: "1px solid blue",
      width: "1240px",
height: "170px"
    }}>                        {/*shape 3 talik */}
      <div style={{
        flex: "1",
        border: "1px solid red"
      }}></div>
      <div style={{
        flex: "1",
        border: "1px solid yellow"
      }}></div>
      <div style={{
        flex: "1",
        border: "1px solid green"
      }}></div>
    </div>

</div>

  </div>  //container
  );
};

export default HomeComponent;