import React from 'react';
import logo from "../assets/Logo.jpg"
import phone from "../assets/phone.svg"
import meil from "../assets/mail.svg"
import twitter from "../assets/1.svg"
import facebook from "../assets/2.svg"
import insta from "../assets/3.svg"
import cat from "../assets/4.svg"
import { Btn } from './styled.js';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
   <div className='nav-control'>
   <div className='nav-top'>
    <div className='top-left'>
     <div >
       <img src={phone} alt="phone-icon"/>
       <p>(414) 857 - 0107</p>
     </div>
     <div>
       <img src={meil} alt="mail-icon"/>
       <p>yummy@bistrobliss</p>
     </div>
    </div>
    <div className='top-right'>
      <img src={twitter} alt="twitter-icon"/>
      <img src={facebook} alt="facebook-icon"/>
      <img src={insta} alt="insta-icon"/>
      <img src={cat} alt="cat-icon"/>
    </div>
   </div>
    <div className='nav-style'>
        <div className='logo-wrap'>
          <img src={logo} alt="logo-img" />
        </div>
        <div className='menu-style'>
          <Link to={'/'} style={{textDecoration:'none',color:'black',borderRadius:'25px'}}>
          <p>Home</p>
          </Link>
          <Link to={'/about'} style={{textDecoration:'none',color:'black',borderRadius:'25px'}}>
          <p>About</p>
          </Link>
          <Link to={'/menu'} style={{textDecoration:'none',color:'black',borderRadius:'25px'}}>
          <p>Menu</p>
          </Link>
          <Link to={'/pages'} style={{textDecoration:'none',color:'black',borderRadius:'25px'}}>
          <p>Pages</p>
          </Link>
          <Link to={'/contact'} style={{textDecoration:'none',color:'black',borderRadius:'25px'}}>
          <p>Contact</p>
          </Link>
        </div>
        <div className='right-nav'>
          <Btn>Book A Table</Btn>
        </div>
    </div>
    </div>
  )
}
