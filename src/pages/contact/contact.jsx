import React from 'react'
import { ContactMain, InfoWrap, MainWrap, TextWrap } from './contactStyle'
import { ContactUs } from './contactUs';

export const ContactComponent = () => {
  return (
    <ContactMain>
       <MainWrap>
        <h1>Contact Us</h1>
        <p>
        We consider all the drivers of change gives you the components <br />
         you need to change to create a truly happens.
        </p>
       </MainWrap>
       <ContactUs />
        <InfoWrap>
           <TextWrap>
           <div>
              <h3>Call Us:</h3>
              <b>+1-234-567-8900</b>
            </div>
            <div>
              <h3>Hours:</h3>
              <p>Mon-Fri: 11am - 8pm <br />
              Sat, Sun: 9am - 10pm</p>
            </div>
            <div>
              <h3>Our Location:</h3>
              <p>123 Bridge Street <br />
              Nowhere Land, LA 12345 <br />
               United States.</p>
            </div>
           </TextWrap>
        </InfoWrap>
    </ContactMain>
  )
}
