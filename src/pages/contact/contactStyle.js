import styled from "styled-components";

export const ContactMain = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
export const MainWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 24px;
    width: 100%;
    height: 500px;
    background: var(--Neutral-02, #F9F9F7);
h1{
    color: var(--Neutral-07, #2C2F24);
    text-align: center;
    font-family: "Playfair Display";
    font-size: 90px;
    font-style: normal;
    font-weight: 400;
    line-height: 96px;
}
p{
    color: var(--Neutral-06, #495460);
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 50;
    line-height: 28px;
}
`
export const FormsWrap = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     padding: 40px;
     gap: 10px;
     border-radius: 16px;
     background: var(--Neutral-01, #FFF);   
     box-shadow: 0px 2.979px 59.574px 0px rgba(0, 0, 0, 0.08);
     margin-top: -300px;
     z-index: 1;
 form{
    display: flex;
    flex-direction: column;
    gap: 24px;
 }    
`
export const Form1Wrap = styled.div`
     display: flex;
.inputs-wrap{
    display: flex;
    text-align: start;
    gap: 24px;
} 
.input-div{
    display: flex;
    flex-direction: column ;
}    
input{
    width: 350px;
    height: 60px;
    padding: 0px 24px;
    gap: 10px;
    border-radius: 72px;
    border: 1px solid var(--Neutral-03, #DBDFD0);
    background: var(--Neutral-01, #FFF);
}     
`
export const Form2Wrap = styled.div`
     display: flex;
     flex-direction: column;
.inputs-wrap{
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 24px ;
}   
.input-div{
    display: flex;
    flex-direction: column ;
}    
input{
    width: 720px;
    height: 60px;
    padding: 0px 24px;
    gap: 10px;
    border-radius: 72px;
    border: 1px solid var(--Neutral-03, #DBDFD0);
    background: var(--Neutral-01, #FFF);
}  
.message-form{
    display: flex;
    flex-direction: column;
textarea{
    width: 720px;
    height: 156px;
    padding: 24px;
    gap: 10px;
    border-radius: 16px;
    border: 1px solid var(--Neutral-03, #DBDFD0);
    background: var(--Neutral-01, #FFF);
    margin-bottom: 24px;
}
} 
`
export const SendButton = styled.button `
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
export const InfoWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: start;
height: 600px;
width: 100%;
background: var(--Neutral-01, #FFF);
margin-top: -300px;
`
export const TextWrap = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 250px;
 gap: 90px;
 b{
    color: #AD343E;
 }
`