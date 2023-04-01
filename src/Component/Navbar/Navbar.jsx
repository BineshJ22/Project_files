import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
    <div className='navbar-links'>
        <a href='#' className='nav-link'>Home</a>
        <a href='#' className='nav-link'>TV Shows</a>
        <a href='#' className='nav-link'>Movies</a>
        <a href='#' className='nav-link'>New & Popular</a>
        <a href='#' className='nav-link'>My List</a>
      </div>
    <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt=''/>
    
    
    </div>
  
  
  
    )
}

export default Navbar