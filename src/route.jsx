import React from 'react'
import Navbar from './navbar'
import { Route, Routes } from 'react-router-dom'
import HomeComponent from './home'
import ProductPage from './product'
import AboutComponent from './about'
import ContactPage from './contact'
import ProfilePage from './profile'
import Notfound from './notfound'
import LoginComp from './login'
import MuiPractice from './contrast/muiPractice'
import ApiConnect from './contrast/apiConnect'
import AdvancedApi from './contrast/advancedApi'

const RouterComp = () => {
  return (
    <div>
          <Navbar/>
        <Routes>
      <Route path='/login' element={<LoginComp />} />      
      <Route path="/" element={<HomeComponent />} />
      <Route path="/home" element={<HomeComponent/> } />
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/about" element={<AboutComponent/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
      <Route path='*' element={<Notfound/>}/>
      <Route path='/muipractice' element={<MuiPractice/>}/>
      <Route path='/apiConnect' element={<ApiConnect/>}/>
      <Route path='advancedApi' element={<AdvancedApi/>}/>
    </Routes>
    </div>
  )
}

export default RouterComp