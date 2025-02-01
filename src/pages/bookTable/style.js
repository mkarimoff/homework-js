import { NavLink as BookLink } from "react-router-dom";
import styled from "styled-components";

export const BtnLink = styled(BookLink)`
border: 1px solid black;
padding: 8px 15px;
border-radius: 25px;
cursor: pointer;
background-color: white;
color: black;
&:hover{
    background-color: #DBDFD0;
    color: black;
    border: none;
}
&.active{
    background-color: #DBDFD0;
    border: none;
  }
`
export const BookMain =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const BookHeader = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #F9F9F7;
    gap: 25px;
    width: 100%;
h1{
    color: var(--Neutral-07, #2C2F24);
    text-align: center;
    font-family: "Playfair Display";
    font-size: 90px;
    font-style: normal;
    font-weight: 300;
    line-height: 96px;
    margin-top: 45px;
}
p{
    color: var(--Neutral-06, #495460);
    text-align: center;
    font-family: "DM Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: 28px; 
    margin-bottom: 250px;
}
`
export const Booking = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 812px;
    height: 504px;
    border-radius: 16px;
    border: 1px solid var(--Neutral-01, #FFF);
    background: var(--Neutral-01, #FFF);
    mix-blend-mode: hard-light;
    box-shadow: 0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08);
    margin-top: -230px;
    z-index: 1;
`
export const BookingWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
input{
    display: flex;
    width: 350px;
    height: 60px;
    padding: 0px 24px;
    justify-content: space-between;
    align-items: center;
    border-radius: 72px;
    border: 1px solid var(--Neutral-03, #DBDFD0);
    background: var(--Neutral-01, #FFF);
   }
  div{
    display: flex;
    flex-direction: column;
    gap: 24px;
  } 
`
export const BookingButtom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 24px;
    gap: 24px;
select{
    display: flex;
    width: 720px;
    height: 60px;
    padding: 0px 24px;
    justify-content: space-between;
    align-items: center;
    border-radius: 72px;
    border: 1px solid var(--Neutral-03, #DBDFD0);
    background: var(--Neutral-01, #FFF);
   }
`
export const BookingButton = styled.button `
    display: flex;
    padding: 20px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    align-self: stretch;
    border-radius: 118px;
    background-color: white;
    border: 1px solid black;
    cursor: pointer;
&:hover{
    background: #AD343E;
    color: white;
   }
`