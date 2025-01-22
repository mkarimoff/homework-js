import React from 'react';
import { MenuList } from '../../mock/menuList.js';
import { Cost, Desc, Logos, MenuBtn, MenuCon, MenuDiv, MenuWrapper, Name } from './menustyle.js';

export const MenuComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <MenuCon >
        <div>
          <h1>Our Menu</h1>
          <p>We consider all the drivers of change gives you the components <br />
           you need to change to create a truly happens.</p>
        </div>
        <div>
          <MenuBtn>All</MenuBtn>
          <MenuBtn>Breakfast</MenuBtn>
          <MenuBtn>Main Dishes</MenuBtn>
          <MenuBtn>Drinks</MenuBtn>
          <MenuBtn>Desserts</MenuBtn>
        </div>
      </MenuCon>
      <MenuWrapper>
      {MenuList.map((value,index)=>{
        return (
          <MenuDiv key={index.id} to={`/MenuDetail/${value.id}`} >
            <img src={value.photo} alt="img" />
            <div className='con'>
            <Cost >{value.cost}</Cost>
            <Name>{value.name}</Name>
            <Desc>{value.description}</Desc>
            </div>
            </MenuDiv>
        )
      })}
    </MenuWrapper>
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
