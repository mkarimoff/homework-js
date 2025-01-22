import React from 'react'
import { PagesList } from '../../mock/pagesList';
import { Data, Desc, PagesCon, PagesDiv, PagesWrapper } from './pagesstyle';

export const PagesComponent = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',backgroundColor:' #F9F9F7'}}>
      <PagesCon >
        <div>
          <h1>Our Blog & Articles</h1>
          <p>We consider all the drivers of change gives you the components <br />
           you need to change to create a truly happens.</p>
        </div>
      </PagesCon>
      <PagesWrapper>
      {PagesList.map((value,index)=>{
        return (
          <PagesDiv key={value.id} to={`/PageDetail/${value.id}`} >
            <img src={value.photo} alt="img" />
            <div className='con'>
            <Data>{value.data}</Data>
            <Desc>{value.description}</Desc>
            </div>
          </PagesDiv>
        )
      })}
    </PagesWrapper>
    </div>
  )
}
