import React from 'react'
import tea from "../assets/tea.svg"
import phone from "../assets/phone.svg"
import mail from "../assets/mail.svg"
import location from "../assets/location.svg"
import { Btn, Same } from './styled.js'
import time from "../assets/time.svg"
import offer from "../assets/offer.svg"
import cart from "../assets/cart.svg"
import sophire from "../assets/sophire.svg"
import matt from "../assets/matt.svg"
import andy from "../assets/andy.svg"

const HomeComponent = () => {
  return (
    <div>
        <div className='bg-image'>
            <div className='body-main'>
                <h1>Best food for <br />
                your taste
                </h1>
                <h5>
                Discover delectable cuisine and unforgettable moments <br />
                 in our welcoming, culinary haven.
                </h5>
                <div className='btns-wrap'>
                  <button className='red-btn'>Book A Table</button>
                  <button className='white-btn'>Explore Menu</button>
                </div>
            </div>
        </div>
        <div className='menu-con'>
          <h1>Browse Our Menu</h1>
        <div className='menu-wrap'>
          <div className='tea-wrap'>
            <img src={tea} alt="tea-icon" />
            <div>
              <h3>Breakfast</h3>
              <p>In the new era of technology we <br />
              look in the future with certainty <br />
               and pride for our life.</p>
            </div>
            <h5>Explore Menu</h5>
          </div>
          <div className='tea-wrap'>
            <img src={tea} alt="tea-icon" />
            <div>
              <h3>Breakfast</h3>
              <p>In the new era of technology we <br />
              look in the future with certainty <br />
               and pride for our life.</p>
            </div>
            <h5>Explore Menu</h5>
          </div>
          <div className='tea-wrap'>
            <img src={tea} alt="tea-icon" />
            <div>
              <h3>Breakfast</h3>
              <p>In the new era of technology we <br />
              look in the future with certainty <br />
               and pride for our life.</p>
            </div>
            <h5>Explore Menu</h5>
          </div>
          <div className='tea-wrap'>
            <img src={tea} alt="tea-icon" />
            <div>
              <h3>Breakfast</h3>
              <p>In the new era of technology we <br />
              look in the future with certainty <br />
               and pride for our life.</p>
            </div>
            <h5>Explore Menu</h5>
          </div>
        </div>
        </div>
        <div className='provide-con'>
          <div>
            <div className='food'>
              <div className='come-visit'>
                <b>Come and visit us</b>
                <div className='contact-wrap'>
                  <div style={{display:"flex",gap:"7px"}} >
                    <img src={phone} alt="phone-icon" />
                    <p>(414) 857 - 0107</p>
                  </div>
                  <div style={{display:"flex",gap:"7px"}}>
                    <img src={mail} alt="email-icon" />
                    <p>happytummy@restaurant.com</p>
                  </div>
                  <div style={{display:"flex",gap:"7px"}}> 
                    <img src={location} alt="location-icon" />
                    <p>837 W. Marshall Lane Marshalltown, <br />
                     IA 50158, Los Angeles</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='provide-right'>
            <h1>We provide healthy <br />
             food for your family.</h1>
             <b>Our story began with a vision to create a unique dining <br />
              experience that merges fine dining,exceptional service, and a <br />
              vibrant ambiance. Rooted in city's rich culinary culture, we aim to <br />
              honor our local roots while infusing a global palate.</b>
              <p>At place, we believe that dining is not just about food, but also about the <br />
              overall experience. Our staff, renowned for their warmth and dedication,<br />
               strives to make every visit an unforgettable event.</p>
               <Btn>More About Us</Btn>
          </div>
        </div>
        <div className='events-con'>
          <h1>We also offer unique <br />
           services for your events</h1>
           <div className='events-wrap'>
         <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
         <div className='caterings'></div>
            <div style={{display:'flex',flexDirection:'column',gap:"15px"}}>
              <b>Caterings</b>
              <p>In the new era of technology we look <br />
              in the future with certainty for life.</p>
            </div>
         </div>
         <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
         <div className='birthdays'></div>
            <div style={{display:'flex',flexDirection:'column',gap:"15px"}}>
              <b>Birthdays</b>
              <p>In the new era of technology we look <br />
              in the future with certainty for life.</p>
            </div>
         </div>
           <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
           <div className='weddings'></div>
            <div style={{display:'flex',flexDirection:'column',gap:"15px"}}>
              <b>Weddings</b>
              <p>In the new era of technology we look <br />
              in the future with certainty for life.</p>
            </div>
           </div>
            <div style={{display:"flex",flexDirection:"column",gap:"20px"}}>
            <div className='events'></div>
            <div style={{display:'flex',flexDirection:'column',gap:"15px"}}>
              <b>Events</b>
              <p>In the new era of technology we look <br />
              in the future with certainty for life.</p>
            </div>
            </div>
           </div>
        </div>
        <div className='food-con'>
          <div className='food-left'>
            <div className='cooking-img'></div>
            <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'25px'}}>
              <div className='shramp-img'></div>
              <div className='shashlik-img'></div>
            </div>
          </div>
          <div className='food-right'>
            <h1>Fastest Food <br />
             Delivery in City
             </h1>
             <p>
             Our visual designer lets you quickly and of drag a down <br />
              your way to customapps for both keep desktop. 
             </p>
             <div className='delivery-info'>
              <div style={{display:'flex',gap:'20px'}}>
                <img src={time} alt="time-icon" />
                <b>
                Delivery within 30 minutes
                </b>
              </div>
              <div style={{display:'flex',gap:'20px'}}>
                <img src={offer} alt="offer-icon" />
                <b>
                Best Offer & Prices
                </b>
              </div>
              <div style={{display:'flex',gap:'20px'}}>
                <img src={cart} alt="cart-icon" />
                <b>
                Online Services Available
                </b>
              </div>
             </div>
          </div>
        </div>
        <Same className='comments-con'>
          <h1>What Our Customers Say</h1>
          <div className='comments-wrap'>
            <div className='comment'>
              <h5>“The best restaurant”</h5>
              <p>
              Last night, we dined at place and were <br />
               simply blown away. From the moment we <br />
               stepped in, we were enveloped in an <br />
               inviting atmosphere and greeted with <br />
                warm smiles.
              </p>
              <div className='comment-line'></div>
              <div className='user-wrap'>
                <div><img src={sophire} alt="user-img" /></div>
                <div>
                  <b>Sophire Robson</b>
                  <p>Los Angeles, CA</p>
                </div>
              </div>
            </div>
            <div className='comment'>
              <h5>“The best restaurant”</h5>
              <p>
              Last night, we dined at place and were <br />
               simply blown away. From the moment we <br />
               stepped in, we were enveloped in an <br />
               inviting atmosphere and greeted with <br />
                warm smiles.
              </p>
              <div className='comment-line'></div>
              <div className='user-wrap'>
                <div><img src={matt} alt="user-img" /></div>
                <div>
                  <b>Matt Cannon</b>
                  <p>San Diego, CA</p>
                </div>
              </div>
            </div>
            <div className='comment'>
              <h5>“The best restaurant”</h5>
              <p>
              Last night, we dined at place and were <br />
               simply blown away. From the moment we <br />
               stepped in, we were enveloped in an <br />
               inviting atmosphere and greeted with <br />
                warm smiles.
              </p>
              <div className='comment-line'></div>
              <div className='user-wrap'>
                <div><img src={andy} alt="user-img" /></div>
                <div>
                  <b>Andy Smith</b>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </Same>
        <div className='blog-con'>
          <div style={{display:'flex',gap:'680px'}}>
            <h1>Our Blog & Articles</h1>
            <Btn $redBtn>Read All Articles</Btn>
          </div>
          <div className='blog-wrap'>
            <div className='blog-left'>
              <div className='burger-img'></div>
              <div className='burger-info'>
                <p>January 3, 2023</p>
                <b>The secret tips & tricks to prepare a perfect burger & pizza <br />
                for our customers
                </b>
                <h6>
                Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper <br />
                 adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida <br />
                ut facilisis neque egestas.
                </h6>
              </div>
            </div>
            <div className='blog-right'>
              <div>
                <div className='fries-img'></div>
                <div className='fries-info'>
                <p>January 3, 2023</p>
                <b>
                How to prepare the <br />
                perfect french fries in an <br />
                air fryer
                </b>
              </div>
              </div>
              <div>
                <div className='chicken-img'></div>
                <div className='chicken-info'>
                <p>January 3, 2023</p>
                <b>
                How to prepare delicious <br />
                 chicken tenders
                </b>
              </div>
              </div>
              <div>
                <div className='cheesecake-img'></div>
                <div className='fries-info'>
                <p>January 3, 2023</p>
                <b>
                7 delicious cheesecake <br />
                 recipes you can prepare
                </b>
              </div>
              </div>
              <div>
                <div className='pizza-img'></div>
                <div className='fries-info'>
                <p>January 3, 2023</p>
                <b>
                5 great pizza restaurants <br />
                 you should visit this city
                </b>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomeComponent