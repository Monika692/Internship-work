import React from 'react'
import styled from "styled-components";

const Form= () => {
  return (
    <>
    <div className='scrolli'>
    <MainContent >
    <h2 style={{textAlign:"center"}}>Welcome, Sai Grocery Shop!</h2>

    <div className="form">
        <div className="left"></div>
        <div className="right"></div>
    </div>
  
    </MainContent>
    </div>
    </>
  )
}

const MainContent = styled.div`
height: 100%;

.form{
    height: 50rem;
}
`;
