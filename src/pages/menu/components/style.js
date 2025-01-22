import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
display: flex;
justify-content: center;
gap: 15px;
`
export const MenuWrapper= styled.div `
    display: flex;
    flex-wrap: wrap;
    max-width: 1500px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 70px;
    padding: 0px 18px;
    margin-bottom:130px ;
`;
export const MenuDiv = styled(Link) `
    width: 306px;
    height: 438px;
    border-radius:25px;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    transition: box-shadow 0.2s ease-in-out 0.2s; 
img{
    width: 100%;
    height: 55%;
    border-top-right-radius:25px;
    border-top-left-radius:25px
}
.con{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 10px;
    height: 45%;
    width: 100%;
}
&:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
export const Cost = styled.b`
color: #AD343E;
text-align: center;
font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: 30px;
letter-spacing: -0.72px;
`
export const Name = styled.div`
 color: var(--Neutral-07, #2C2F24);
text-align: center;
font-family: "DM Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 26px;
`
export const Desc = styled.div`
color: var(--Neutral-06, #414536);
text-align: center;
font-family: "DM Sans";
font-size: 15px;
font-style: normal;
font-weight: 200;
line-height: 24px; 
`
