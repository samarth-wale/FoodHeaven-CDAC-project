import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="sidebar-option">
                    <img className='add-icon' src={assets.add_icon_white} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="sidebar-option">
                    <img className='list-icon' src={assets.list_items} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="sidebar-option">
                    <img className='orders-icon' src={assets.list_items} alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar
