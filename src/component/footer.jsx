import React from 'react'
import logo from '../assets/logo.png'
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import insta from "../assets/instag.svg"
import cat from "../assets/cat.svg"
import first from "../assets/first.png"
import second from "../assets/second.png"
import third from "../assets/third.png"
import fourth from "../assets/fourth.png"

export const Footer = () => {
  return (
    <div className='footer-con'>
      <div className='footer-wrap'>
      <div className='footer-left'>
       <img src={logo} alt="" />
       <p>
       In the new era of technology we look a <br />
       in the future with certainty and pride to <br />
       for our company and.
       </p>
       <div style={{display:'flex',gap:'12px'}}>
        <img src={twitter} alt="socialmedia-icon" />
        <img src={facebook} alt="socialmedia-icon" />
        <img src={insta} alt="socialmedia-icon" />
        <img src={cat} alt="socialmedia-icon" />
       </div>
      </div>
      <div className='footer-menu'>
       <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
          <b>Pages</b>
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Delivery</p>
       </div>
       <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
          <b>Utility Pages</b>
          <p>Start Here</p>
          <p>Styleguide</p>
          <p>Password Protected</p>
          <p>404 Not Found</p>
          <p>Licenses</p>
          <p>Changelog</p>
          <p>View More</p>
       </div>
      </div>
      <div className='footer-right'>
        <b>Follow Us On Instagram</b>
        <div className='insta-imgs'>
          <img src={first} alt="food-img" />
          <img src={second} alt="food-img" />
          <img src={third} alt="food-img" />
          <img src={fourth} alt="food-img" />
        </div>
      </div>
      </div>
      <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
    </div>
  )
}
