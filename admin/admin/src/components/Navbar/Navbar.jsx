import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='full-logo'>
        <img className='pizza-logo' src={assets.pizza_logo} alt="" />
        <span className='name'>FoodHeaven</span>
          </div>
        <img className='profile-icon' src={assets.profile_icon} alt="" />
      
    </div>
  )
}

export default Navbar
