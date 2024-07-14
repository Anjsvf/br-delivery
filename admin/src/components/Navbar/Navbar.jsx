import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'


const Navbar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo_admin} alt="" />
        <img className='profile' src={assets.perfil_admin} alt="" />
    </div>
  )
}

export default Navbar