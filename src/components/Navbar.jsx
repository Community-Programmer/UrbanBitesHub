import React, { useState } from 'react'
import image from '../images/restaurant.png'
import '../css/Navbar.css'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {

    const [activeLink, setActiveLink] = useState('/');
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };

    const handleLinkClick = (to) => {
      setActiveLink(to);
    };

  return (
    <>
   <nav className="navbar">

    <div className="logo">
        <img src={image} alt="logo" />
        <a href="/">UrbanBites Hub</a>
    </div>

    <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <ul>
            <Link to='/'  onClick={() => handleLinkClick('/')}><li className={activeLink === '/' ? 'active' : ''}>Home</li></Link>
            <Link to='/menu'  onClick={() => handleLinkClick('/menu')}><li className={activeLink === '/menu' ? 'active' : ''}>Menu</li></Link>
            <Link to='/services'  onClick={() => handleLinkClick('/services')}><li className={activeLink === '/services' ? 'active' : ''}>Services</li></Link>
            <Link to='/categories'  onClick={() => handleLinkClick('/categories')}><li className={activeLink === '/categories' ? 'active' : ''}>Categories</li></Link>
        </ul>

    </div>

    <div className="icons">
    <i className="fa-solid fa-magnifying-glass fa-xl"/>
    <i className="fa-solid fa-bag-shopping fa-xl"/>
    <i className="fa-solid fa-user fa-xl"/>
    <i onClick={toggleNavbar} id='burger' class="fa-solid fa-bars fa-xl"></i>
    </div>

   </nav>
   <Outlet/>
    </>
  )
}

export default Navbar