import { Link } from "react-router-dom";
import styled from "styled-components";

export const PagesCon = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   gap: 50px;
   margin-top: 50px;
h1{
   color: var(--Neutral-07, #2C2F24);
   text-align: center;
   font-family: "Playfair Display";
   font-size: 95px;
   font-weight: 100;
   line-height: 96px; 
}
p{
    color: var(--Neutral-07, #2C2F24);
    font-family: "DM Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; 
    margin-top: 15px;
}
`
export const PagesWrapper= styled.div `
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
export const PagesDiv= styled(Link) `
    width: 290px;
    height: 340px;
    flex-shrink: 0;
    border-radius:12px;
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
    justify-content: start;
    align-items: start;
    padding: 30px;
    gap: 10px;
    height: 45%;
    width: 100%;
}
&:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`;
export const Data = styled.p`
color: var(--Neutral-05, #737865);
font-family: "DM Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 20px;
`
export const Desc = styled.p`
color: var(--Neutral-07, #2C2F24);
font-family: "DM Sans";
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 26px;
text-align: start;
`
export const PageDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`
export const Title = styled.h1`
text-align: center;
color: var(--Neutral-07, #2C2F24);
text-align: center;
font-family: "Playfair Display";
font-size: 55px;
font-style: normal;
font-weight: 500;
line-height: 60.5px; /* 110% */
`
export const DetailCon = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--Neutral-02, #F9F9F7);

img {
 border-radius: 12px 12px 12px 12px;
 width: 1080.229px;
 height: 688.01px;
 margin-top: 60px;
}
`
export const Title1 = styled.h1`
color: var(--Neutral-07, #2C2F24);
text-align: center;
font-family: "Playfair Display";
font-size: 52px;
font-style: normal;
font-weight: 100;
line-height: 60.5px;
width: 1000px;
margin-top: 60px;
`
export const TextWrap = styled.div`
display: flex;
text-align: start;
flex-direction: column;
justify-content: start;
margin-top: 50px;
padding-bottom: 100px;
`
export const Header = styled.b`
color: var(--Neutral-07, #2C2F24);
font-family: "DM Sans";
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 30px;
text-align: start;
margin-top: 50px;
`
export const SubHead = styled.p`
color: var(--Neutral-06, #414536);
font-family: "DM Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px;
text-align: start;
width: 980px;
margin-top: 25px;
`
export const Body = styled.p`
color: var(--Neutral-06, #414536);
font-family: "DM Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; 
text-align: start;
margin-top: 25px;
width: 900px;
`
export const Body2 = styled.p`
color: var(--Neutral-06, #414536);
font-family: "DM Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; 
text-align: start;
width: 900px;
`
export const Bottom = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: var(--Neutral-01, #FFF);
width: 100%;
padding: 100px;
h1{
  color: var(--Neutral-07, #2C2F24);
  text-align: center;
  font-family: "Playfair Display";
  font-size: 55px;
  font-style: normal;
  font-weight: 500;
  line-height: 60.5px;
}
p{
  color: var(--Neutral-06, #414536);
  text-align: center;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 200;
  line-height: 28px; 
  margin-top: 20px;
}
`
export const DivsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 70px;
`
export const BottomDivs = styled.div`
  display: flex;
  flex-direction :column;
  justify-content: center;
  border-radius: 12px;
  width: 300px;
  height: 340px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  transition: box-shadow 0.2s ease-in-out 0.2s; 
  cursor: pointer;
img{
    width:100%;
    height: 60%;
    margin-top: -2px;
}

.BottomText{
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: start;
    height: 40%;
    padding: 10px 0px 25px 25px;
p{
   color: var(--Neutral-05, #737865);
   font-family: "DM Sans";
   font-size: 14px;
   font-style: normal;
   font-weight: 500;
   line-height: 20px; 
   text-align: start;
}

b{
   color: var(--Neutral-07, #2C2F24);
   font-family: "DM Sans";
   font-size: 20px;
   font-style: normal;
   font-weight: 500;

}
}
&:hover{
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
`
