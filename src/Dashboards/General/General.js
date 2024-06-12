import React from "react";
import styled from "styled-components";
import { IoIosAddCircleOutline } from "react-icons/io";
import { BsPeople } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { IoMdAppstore } from "react-icons/io";
import { AiFillCaretRight} from "react-icons/ai";


import { MdOutlineLocalGroceryStore } from "react-icons/md";

import { staff,offers, Attendace, Inventory, totalInventory, remainingDebt, alert} from './gendata.js';

const General = () => {

  return (
    <>
      <div className="scrolli">
        <MainContent>
          <h2 style={{ textAlign: "center" }}>Welcome, Sai Grocery Shop!</h2>
          <Box>
            <div className="box" id="box-3">
              <div className="headings">
                <h5>Total Staff Present</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>

              <div className="content">
                <BsPeople style={{ height: "8%", width: "8%" }} />
                {staff.map((staff) => {
                  return <h3>{staff.staff} employess</h3>;
                })}
              </div>
            </div>
            <div className="box" id="box-2">
              <div className="headings">
                <h5 style={{marginBottom:'1rem'}}>Alert New Offers</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
              <div className="listItems">
              
                {offers.map((offers) => {
                  return (
                    <div className="iconList"><AiFillCaretRight/><p className="iconText">  {offers.offer}</p> 
                    </div>
                      
                  );
                })}
              </div>
            </div>
            <div className="box" id="box-1">
              <div className="billing">
                <p style={{marginLeft:'1rem'}}>Billing</p>
                <IoIosAddCircleOutline size={35}/>
              </div>

              <div className="inventory">
                <p style={{marginLeft:'1rem'}}>Inventory </p>
                <IoIosAddCircleOutline size={35} />
              </div>
            </div>
            <div className="box" id="box-4">
              <div className="headings">
                <h5 style={{marginBottom:'1rem'}}>Inventory Analysis</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
              <div className="listItems">
                {Inventory.map((Inventory) => {
                  return (
                    <div className="iconList"><AiFillCaretRight/><p className="iconText">  {Inventory.offer}</p> 
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box" id="box-5">
              <div className="headings">
                <h5>Staff Attendance</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
              <div className="staff">
                {Attendace.map((Attendace) => {
                  return (
                    <div className="attendance">
                      <p>{Attendace.name}</p>
                      <p className="status">{Attendace.status}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="box" id="box-6">
              <div className="totalInventory">
                <div className="headings">
                  <h5>Total Inventory</h5>
                  <h5 className="view">view all &#x2192;</h5>
                </div>
                  <div className="data">
                    <MdOutlineLocalGroceryStore />
                    {
                    totalInventory.map((totalInventory)=>{
                      return <p>{totalInventory.data}</p> 
                      
                    }) 
                      
                      }
                     
                  </div>
                <div></div>
              </div>
              <div className="expiryProducts">
                <div className="headings">
                  <h5>Expiry Products</h5>
                  <h5 className="view">view all &#x2192;</h5>
                </div>
                <div className="data">
                <IoMdAppstore />
                    {
                    totalInventory.map((totalInventory)=>{
                      return <p>{totalInventory.data}</p> 
                      
                    }) 
                      
                      }
     
                  </div>

                <div></div>
              </div>
              <div className="laststockOrdered">
                <div className="headings">
                  <h5>Last Stock Imported</h5>
                  <h5 className="view">view all &#x2192;</h5>
                </div>

                <div className="data">
                <BsFillCalendarDateFill />
                    {
                    totalInventory.map((totalInventory)=>{
                      return <p>{totalInventory.data}</p> 
                      
                    }) 
                      
                      }
                    
                  </div>
                <div></div>
              </div>
            </div>
            <div className="box" id="box-7">
              <div className="headings">
                <h5>Alert Sending</h5>
              </div>

             
            </div>
            <div className="box" id="box-8">
              <div className="headings">
                <h5>Remaining Debt</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
                    <div className="remainingDebt">

                   
                {remainingDebt.map((remainingDebt) => {
                  return (
                   <div className="debt">
                    
                      <p>{remainingDebt.name}</p>
                      <div className="date">

           
                      <p>{remainingDebt.date}</p>
                      </div>
                      <p className="payment">{remainingDebt.payment}</p>
                   </div>
                  );
                })}
                 </div>
       
              
            </div>
            <div className="box" id="box-9">
              <div className="headings">
                <h5>Latest Online Orders</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
              <div className="remainingDebt">

                   
{remainingDebt.map((remainingDebt) => {
  return (
   <div className="debt">
      <p>{remainingDebt.name}</p>
      <div className="date">
      <p>{remainingDebt.date}</p>
      </div>
      <p className="payment">{remainingDebt.payment}</p>
   </div>
  );
})}
 </div>
            </div>
            <div className="box" id="box-10">
              <div className="headings">
                <h5>Enquiry And Complaints</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
            </div>
            <div className="box" id="box-11">
              <div className="headings">
                <h5>Bills & Rental</h5>
                <h5 className="view">view all &#x2192;</h5>
              </div>
            </div>
          </Box>
        </MainContent>
      </div>
    </>
  );
};

const MainContent = styled.div`
font-size: 0.9rem;
  height: 100%;
`;

const Box = styled.div`
  margin-top: 0rem;
  color: var(--textColor);
  padding: 1rem 1.1rem;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 0.7rem;
  h5{
    font-size: 0.7rem;
    font-weight: 400;
  }
  .headings {
    

    display: flex;
    justify-content: space-between;
    opacity: 50%;

    color: var(--textColor);
    
    .view {
      opacity: 100%;
      color: var(--highlightedColor);
    }
  }

  .box {
    background-color: var(--bgColor);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: none;
    height: 7rem;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .box:hover {
    background-color: var(--hover);
    border-radius: 30px;
  }

  .remainingDebt{

      padding: 0.5rem;
      margin-top: 1rem;
      text-align: left;
    }
    .debt{
      font-size: 0.7rem;
      display: grid;
      grid-template-columns: 40% 35% 25%;
      .date{
        text-align: right;
      }
      .payment{
        text-align: right;
      }
      
    
    }
  .data{
    font-size:1.3rem ;
    justify-content: space-between;
      display: flex;
        padding-top: 2rem;
        
      }
  .listItems {
    overflow: scroll;
    margin-top: 1rem;
   
      /* padding: 1rem; */
    /* margin: 1rem; */
    .iconText{
      margin-left: 1rem;
      margin-bottom: 0.3rem;
    }
    .iconList{

      align-items: center ;
      border-radius: 10px;
      margin-bottom: 0.7rem;
      padding: 0.5rem;
      border: solid;
      display: flex;
    }
      
      .listItemstext{
        margin-left: rem;
        line-height: 1.4rem;
        font-size: 0.8rem;
        font-weight: 100;
       
        

      }
    }

  #box-1 {
    /* padding: 0 2rem; */
    background-color: var(--baseColor);
    align-items: center;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
    padding-top: 1rem;
   

    .billing {
      
      padding: 1rem;
      align-items: center;
      justify-content: space-between;
      display: flex;
      border-radius: 20px;
      font-size: 1rem;
      background-color: var(--btnColor);  
      font-weight: 400;
      color:var(--active);
    }
    .billing:hover {
      background-color: var(--active);
      color: var(--btnColor);
    }

    .inventory {
      padding: 1rem;
      align-items: center;
      justify-content: space-between;
      display: flex;
      border-radius: 20px;
      font-size: 1rem;
      background-color: var(--btnColor);
      transition: all 0.15s ease;
      font-weight: 400;
      color:var(--active);
    }
    .inventory:hover {
      background-color: var(--active);
      color: var(--btnColor);
    }
  }
  #box-2 {
    
    overflow: scroll;
    grid-row: 1/4;
    grid-column: 2/2;
    height: 31.2rem;
   
  }
  #box-3 {
    padding: 2rem;
    background-color: var(--bgColor);
    color: var(--textColor);

    .content {
      padding: 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &:hover {
      background-color: var(--hover);
    }
  }
  #box-4 {
    grid-row: 2/4;
    height: 19rem;
    
      overflow: scroll  ;

  }
  #box-5 {
    grid-row: 2/4;
    height: 19rem;
    color: var(--textColor);
    .staff {
      margin-top: 1rem;
      .attendance {
        display: flex;

        justify-content: space-between;
        .status {
          text-align: center;
          margin-top: 7px;
          border-radius: 20px;
          width: 5rem;
          background-color: var(--success);
        }
      }
    }
  }
  #box-6 {
    height: auto;
    padding: 0;
    grid-row: 4/4;
    grid-column: 1/3;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--baseColor);
    gap: 1rem;
    .totalInventory {
      padding:2rem 1.4rem;
      background-color: var(--bgColor);
      border-radius: 20px;
     
    }
    .totalInventory > h5 {
      opacity: 50%;
      color: #000;
    }
    .totalInventory:hover {
      background-color: var(--btnColor);
    }

    .expiryProducts {
      padding:2rem 1.4rem;
      background-color: var(--bgColor);
      border-radius: 20px;
    }

    .expiryProducts:hover {
      background-color: var(--btnColor);
    }
    .laststockOrdered {
      padding:2rem 1.4rem;
      background-color: var(--bgColor);
      border-radius: 20px;
    }

    .laststockOrdered:hover {
      background-color: var(--btnColor);
    }
  }
  #box-7 {
    grid-row: 4/7;
    grid-column: 3/3;
    height: 32rem;
  }
  #box-8 {
    height: 19rem;

    grid-row: 5/8;
    grid-column: 1/1;
   
  }
  #box-9 {
    height: 19rem;
    grid-row: 5/8;
    grid-column: 2/2;
  }
  #box-10 {
    grid-row: 7/7;
    grid-column: 1/3;
  }
`;

export default General;
