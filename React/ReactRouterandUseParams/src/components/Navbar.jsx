import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
      <NavLink className={(e)=>{return (e.isActive?"Active":"")}} to="/">Home</NavLink>
      <NavLink className={(e)=>{return (e.isActive?"Active":"")}} to="/about">About</NavLink>
      <NavLink className={(e)=>{return (e.isActive?"Active":"")}} to="/contact">Contact</NavLink>
      <NavLink className={(e)=>{return (e.isActive?"Active":"")}} to="/login">Login</NavLink>
    </ul>
    </div>
  )
}

export default Navbar
