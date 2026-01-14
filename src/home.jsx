import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BackBtn } from './button';

const HomeComponent = () => {
    const navigate = useNavigate();
function backFunction() {
    console.log("back ")
    navigate(-1);

}

  return (
    <>
    <button onClick={backFunction}>BACK</button>
    <div style={{ display: "flex", }}>HomePage</div>
    <button onClick={BackBtn}>BackBtn</button>
  </>
  )
}

export default HomeComponent;