import React, { useState } from 'react';
import AllData from './all';
import BreakfastData from './breakfast';
import MainDishesData from './mainDishes';
import DrinksData from './drinks';
import DessertsData from './desserts';
import { Container } from './style';
import { MenuBtn } from '../menustyle';

const MenuComponentData = () => {
  const [selectCategory, setSelectCategory] = useState("All");

  const handleClick = (category) => {
    setSelectCategory(category);
  };

  return (
    <div>
      <Container>
        <MenuBtn active={selectCategory === "All"} onClick={() => handleClick("All")}>
          All
        </MenuBtn>
        <MenuBtn active={selectCategory === "Breakfast"} onClick={() => handleClick("Breakfast")}>
          Breakfast
        </MenuBtn>
        <MenuBtn active={selectCategory === "Main Dishes"} onClick={() => handleClick("Main Dishes")}>
          Main Dishes
        </MenuBtn>
        <MenuBtn active={selectCategory === "Drinks"} onClick={() => handleClick("Drinks")}>
          Drinks
        </MenuBtn>
        <MenuBtn active={selectCategory === "Desserts"} onClick={() => handleClick("Desserts")}>
          Desserts
        </MenuBtn>
      </Container>
      {selectCategory === "All" && <AllData />}
      {selectCategory === "Breakfast" && <BreakfastData />}
      {selectCategory === "Main Dishes" && <MainDishesData />}
      {selectCategory === "Drinks" && <DrinksData />}
      {selectCategory === "Desserts" && <DessertsData />}
    </div>
  );
};

export default MenuComponentData;
