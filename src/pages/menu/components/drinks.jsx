import React from 'react';
import { MenuList } from '../../../mock/menuList'; 
import { Cost, Desc, MenuDiv, MenuWrapper, Name } from './style';

const BreakfastData = () => {
  const filteredMenu = MenuList.filter((item) =>  item.type === "Drinks");

  return (
    <MenuWrapper >
      {filteredMenu.map((value,index)=>{
        return (
          <MenuDiv key={index.id} to={`/MenuDetail/${value.id}`} >
            <img src={value.photo} alt="img" />
            <div className='con'>
            <Cost >{value.cost}</Cost>
            <Name >{value.name}</Name>
            <Desc >{value.description}</Desc>
            </div>
            </MenuDiv>
        )
      })}
    </MenuWrapper>
  );
}

export default BreakfastData;