import React from 'react';
import {  Logos,  MenuCon } from './menustyle.js';
import MenuComponentData from './components/menuCom.jsx';

export const MenuComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <MenuCon >
        <div>
          <h1>Our Menu</h1>
          <p>We consider all the drivers of change gives you the components <br />
           you need to change to create a truly happens.</p>
        </div>
        <MenuComponentData />
      </MenuCon>
       <Logos >
         <div className='order-wrapp'>
          <h1>You can order <br />
          through apps</h1>
          <p>Lorem ipsum dolor sit amet consectetur <br />
           adipiscing elit enim bibendum sed et aliquet aliquet <br />
            risus tempor semper.</p>
         </div>
         <div>
            <h2>LOGO</h2>
            <h2>LOGO</h2>
            <h2>LOGO</h2>
         </div>
       </Logos>
    </div>
  )
}
