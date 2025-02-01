import React from 'react'
import { BookHeader, Booking, BookingButtom, BookingButton, BookingWrap, BookMain } from './style'

import { Map } from 'react-kakao-maps-sdk'

const BookTable = () => {
  return (
 <BookMain>
    <BookHeader>
        <h1>Book A Table</h1>
        <p>We consider all the drivers of change gives you the components <br />
         you need to change to create a truly happens.</p>
    </BookHeader>
       <Booking>
        <BookingWrap>
        <div>
          <form>
              <label>Date</label>
              <input type="date" />
          </form>
          <form>
            <label>Name</label>
            <input type="text" placeholder='Enter your name' />
        </form>
        </div>
        <div>
          <form>
              <label>Time</label>
              <input type="time" />
          </form>
          <form>
            <label>Phone</label>
            <input type="tel" placeholder='x-xxx-xxx-xxxx' />
         </form>
        </div>
        </BookingWrap>
       <BookingButtom>
       <form >
          <label htmlFor="people">Total Person</label>
          <select name="" id="people">
          <option value="1">1 person</option>
          <option value="2">2 people</option>
          <option value="3">3 people</option>
          </select>
        </form>
        <BookingButton>Book A Table</BookingButton>
       </BookingButtom>
       </Booking>
       <Map/>
</BookMain>
  )
}

export default BookTable