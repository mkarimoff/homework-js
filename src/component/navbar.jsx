import React from 'react';
import logo from "../assets/Logo.jpg"
import phone from "../assets/phone.svg"
import meil from "../assets/mail.svg"
import twitter from "../assets/1.svg"
import facebook from "../assets/2.svg"
import insta from "../assets/3.svg"
import cat from "../assets/4.svg"
import { NavLink } from 'react-router-dom'; 
import { BtnLink } from '../pages/bookTable/style.js';

export const Navbar = () => {
  return (
    <div className='nav-control'>
      <div className='nav-top'>
        <div className='top-left'>
          <div>
            <img src={phone} alt="phone-icon" />
            <p>(414) 857 - 0107</p>
          </div>
          <div>
            <img src={meil} alt="mail-icon" />
            <p>yummy@bistrobliss</p>
          </div>
        </div>
        <div className='top-right'>
          <a href="https://www.instagram.com/m_karimoff" target="_blank">
          <img src={twitter} alt="twitter-icon" />
          </a>
           <a href="https://www.instagram.com/m_karimoff">
           <img src={facebook} alt="facebook-icon" />
           </a>
          <a href="https://www.instagram.com/m_karimoff">
          <img src={insta} alt="insta-icon" />
          </a>
          <a href="https://www.instagram.com/m_karimoff">
          <img src={cat} alt="cat-icon" />
          </a>
        </div>
      </div>
      <div className='nav-style'>
        <div className='logo-wrap'>
          <img src={logo} alt="logo-img" />
        </div>
        <div className='menu-style'>
          <NavLink 
            to='/' 
            style={{ textDecoration: 'none', color: 'black', borderRadius: '25px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')} 
          >
            <p>Home</p>
          </NavLink>
          <NavLink 
            to='/about' 
            style={{ textDecoration: 'none', color: 'black', borderRadius: '25px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <p>About</p>
          </NavLink>
          <NavLink 
            to='/menu' 
            style={{ textDecoration: 'none', color: 'black', borderRadius: '25px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <p>Menu</p>
          </NavLink>
          <NavLink 
            to='/pages' 
            style={{ textDecoration: 'none', color: 'black', borderRadius: '25px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <p>Pages</p>
          </NavLink>
          <NavLink 
            to='/contact' 
            style={{ textDecoration: 'none', color: 'black', borderRadius: '25px' }}
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            <p>Contact</p>
          </NavLink>
        </div>
        <div className='right-nav'>
          <BtnLink to='/bookTable' 
            style={{ textDecoration: 'none', color: 'black', borderRadius: '25px' }}
            className={({ isActive }) => (isActive ? 'button-link' : '')} 
            >Book A Table
          </BtnLink>
        </div>
      </div>
    </div>
  );
}
