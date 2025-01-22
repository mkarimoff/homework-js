import React from 'react'
import {  useParams } from 'react-router-dom'
import { PagesList } from '../mock/pagesList';
import { Body, Body2,  Bottom,  BottomDivs,  DetailCon, DivsWrap, Header, SubHead, TextWrap, Title1 } from '../pages/pages/pagesstyle';
import image1 from "../assets/bottom1.png"
import image2 from "../assets/bottom2.png"
import image3 from "../assets/bottom1.png"
import image4 from "../assets/bottom2.png"


const PageDetail = () => {
  let { id } = useParams();
  console.log("detail:",PagesList)
  const data = PagesList.find((value)=> value.id == parseFloat(id));
  console.log(id);
  console.log("data",data)
  return (
    <DetailCon>
      <Title1>{data.title}</Title1>

      <img src={data.secondaryPhoto} alt="second-img"  />
      <TextWrap>
      <Header>{data.header}</Header>
      <SubHead>{data.subheading}</SubHead>
      <Body>{data.body }</Body>
      <Body2>{data.body2}</Body2>
      <Body2>{data.body3}</Body2>
      <Body2>{data.body4}</Body2>
      <Body2>{data.body5}</Body2>
      <Header>{data.header2}</Header>
      <SubHead>{data.subheading}</SubHead>
      <Body>{data.body}</Body>
      <Body2>{data.body2}</Body2>
      <Body2>{data.body3}</Body2>
      <Body2>{data.body4}</Body2>
      <Body2>{data.body5}</Body2>
      <img src={data.thirdPhoto} alt="img"  />
      <Header>{data.header3}</Header>
      <Body>{data.lastText}</Body>
      </TextWrap>
      <Bottom>
        <div>
          <h1>Read More Articles</h1>
          <p>We consider all the drivers of change gives you the components you need  <br />
          to change to create a truly happens.</p>
        </div>
        <DivsWrap>
          <BottomDivs>
            <img src={image1} alt="image"  />
           <div className='BottomText'>
           <p>January 3, 2023</p>
            <b>How to prepare a delicious <br />
             gluten free sushi</b>
           </div>
          </BottomDivs>
          <BottomDivs>
            <img src={image2} alt="image"  />
           <div className='BottomText'>
           <p>January 3, 2023</p>
            <b>Exclusive baking lessons <br />
             from the pastry king</b>
           </div>
          </BottomDivs>
          <BottomDivs>
            <img src={image3} alt="image"  />
           <div className='BottomText'>
           <p>January 3, 2023</p>
            <b>How to prepare the <br />
             perfect fries in an air fryer</b>
           </div>
          </BottomDivs>
          <BottomDivs>
          <img src={image4} alt="image"  />
          <div className='BottomText'>
          <p>January 3, 2023</p>
            <b>How to prepare delicious <br />
            chicken tenders</b>
          </div>
          </BottomDivs>
        </DivsWrap>
      </Bottom>
    </DetailCon>
  )
};

export default PageDetail

