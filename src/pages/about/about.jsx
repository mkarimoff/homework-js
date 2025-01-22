import React from 'react'
import { Same } from '../../component/styled.js';
import sophire from "../../assets/sophire.svg"
import matt from "../../assets/matt.svg"
import andy from "../../assets/andy.svg"
const AboutComponent = () => {
  return (
    <div>
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
    </div>
  )
};

export default AboutComponent
