import React from 'react'
import styled from "styled-components"; 
import { BasicTable } from './BasicTable.js'
const Distributor= () =>{

  return (
    <>
    <div className='scrolli'>
    <MainContent >
    <h2 style={{textAlign:"center"}}>Welcome, Sai Grocery Shop!</h2>
    </MainContent>
    <BasicTable/>
    </div>
    </>
  )
}
const MainContent = styled.div`
height: 100%;
`
export default Distributor