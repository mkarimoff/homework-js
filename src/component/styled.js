import styled from "styled-components";
export const Btn = styled.button `
    border: ${(props) => (props.$redBtn ? "none" : "1px solid black")};
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    background-color: ${(prop) => (prop.$redBtn ? "#AD343E": "white")};
    color: ${(props) => (props.$redBtn ? "white" : "black")};
    &:hover{
        background-color: #DBDFD0;
        color: black;
        border: 1px solid black;
    }
`;
export const Same = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 65px;
  margin-top: 100px;
  .comments-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
  gap: 25px;
  height: 400px;
}
.comment{
  display: flex;
  align-items: center ;
  justify-content: center;
  flex-direction: column;
  text-align: start;
  gap: 25px;
  width: 416px;
  height: 408px;
  border-radius: 12px;
  background: var(--Neutral-02, #F9F9F7);
}
.comment h5{
  color: #AD343E;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; 
  letter-spacing: -0.72px;
  margin-left: -100px;
}
.comment p{
  color: var(--Neutral-06, #414536);
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
.comment-line{
  width: 346px;
  height: 1px;
  opacity: 0.7;
  background: #DBDFD0;
}
.user-wrap{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: -90px;
}
.user-wrap b{
  color: var(--Neutral-07, #2C2F24);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 
}
.user-wrap p{
  color: var(--Neutral-06, #414536);
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}
`;

