import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = ({containerStyles}) =>{
  return (
    <div>
      <nav className={`${containerStyles}`}>
        <NavLink to = {'/'} className = {({isActive}) => isActive ?"active-link py-1" : "py-1"}>
          Home
        </NavLink>
        <NavLink to = {'/listing'} className = {({isActive}) => isActive ?"active-link py-1" : "py-1"}>
          Listing
        </NavLink>
        <NavLink to = {'mailto:prernamadhyan12@gmail.com'} className = {({isActive}) => isActive ?"active-link py-1" : "py-1"}>
          Contacts
        </NavLink>
        <NavLink to = {'/add-property'} className = {({isActive}) => isActive ?"active-link py-1" : "py-1"}>
          Add Property
        </NavLink>
      </nav>
    </div>
  )
}

export default Navbar