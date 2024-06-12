import React from "react";
import styled from "styled-components";
import { PieChart, Pie, Cell } from "recharts";
import { StockOrder, ondemand } from "./inventdata.js";
import {AiFillCaretRight} from 'react-icons/ai'

const Inventory = () => {
  const data = [
    { name: "Group A", value: 100 },
    { name: "Group B", value: 200 },
    { name: "Group C", value: 800 },
    // { name: "Group D", value: 200 },
  ];
  const COLORS = ["#176B87", "#FF6666", "#F2BE22", "#00DFA2"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div className="scrolli">
        <MainContent>
          <h2 style={{ textAlign: "center" }}>Welcome, Sai Grocery Shop!</h2>
          {/* First Section  */}

          <div className="first">
            {/* <div className="brcde">
              <button id="brcode">Generate Bar Code</button>
            </div>
            <div className="Add">
              <button id="totalinvent">Total Inventory Present</button>
            </div>
            <div className="Update">
              <button id="addinvent">Add Inventory</button>
            </div> */}
          </div>
          {/* Second Section  */}

          <div className="second">
            <div className="left2">
              <div className="headings">
                <h5 style={{ fontWeight: '400'}}>Last Stock Ordered</h5>
                <h5 style={{ fontWeight: '400'}} id="view">View More</h5>
              </div>
              <div className="listItems">
                <ul className="stocklist">
                  {StockOrder.map((stockOrder) => (
                    <li key={stockOrder.id}>{stockOrder.offer}</li>
                  ))}
                </ul>
              </div>

              <div className="content"></div>
            </div>
            <div className="right2">
              <button id="updinvnt">Generate Bar Code</button>
              <button id="updinvnt">Total Inventory</button>
              <button id="updinvnt">Add Inventory</button>
              <button id="updinvnt">Update Inventory</button>
            </div>
          </div>

          {/* Third Section  */}

          <div className="third"></div>
          {/* Fourth Section  */}

          <div className="fourth">
            <div className="left4">
              <div className="left41">
                <div className="left411">
                  <div className="head">
                    <h5 style={{ fontWeight: '400', opacity:"50%"}} id="h5411">Stock On demand</h5>
                  </div>
                  <div className="listItems">
                    {ondemand.map((ondemand) => {
                      return (
                       <div className="iconList"> 
                         <AiFillCaretRight/><p style={{fontSize:"0.8rem"}}>{ondemand.demand}</p>
                          </div>
                        );
                    })}
                  </div>
                </div>

                <div className="left412">
                  {/* <div className="head">
                    <h5 id="h5411">Most Frequent stock</h5>
                  </div> */}

                  <div className="fifth">
                    <div className="fifth1">
                      <button id="ordered">Stock Ordered</button>
                    </div>
                    <div className="fifth2">
                      <button id="notification">Stock Notification</button>
                    </div>
                    <div className="fifth3">
                      <button id="order">Scheduled Orders</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="left42">
                <div className="enquiry">
                  <div className="head">

                  <h5 style={{ fontWeight: '400', opacity:"50%"}} >Enquiry</h5>
                  </div>
                </div>
                <div className="frequent">
                  <div className="head">
                    <h5 style={{ fontWeight: '400', opacity:"50%"}}  id="h5411">Most Frequent stock</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="right4">
              <div className="chartData">
                <div className="data Personal"></div>Wasted
                <div className="data Workers"></div>Returned
                <div className="data Phone"></div>Sold
              </div>
              <div className="Pie">
                <PieChart width={500} height={500}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        cornerRadius={15}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
          </div>

          {/* Fourth Section  */}
          {/* 
          <div className="fifth">
            <div className="fifth1">
              <button id="ordered">Stock Ordered</button>
            </div>
            <div className="fifth2">
              <button id="notification">Stock Notification</button>
            </div>
            <div className="fifth3">
              <button id="order">Scheduled Orders</button>
            </div>
          </div> */}
        </MainContent>
      </div>
    </>
  );
};

const MainContent = styled.div`
  height: 100%;

  .iconList{

align-items: center ;
border-radius: 10px;
margin-bottom: 0.7rem;
padding: 0.5rem;
border: solid;
display: flex;
}
  .second {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0.5rem;
    height: 5rem;
    justify-content: center;
    align-items: center;
    

    .left2 {
      height: 4rem;
      border-radius: 15px;
      background-color: var(--bgColor);

      .headings {
     
        opacity: 50%;
        color: var(--textColor);
        margin-right: 2rem;
        margin-left: 2rem;
        margin-top: 0.5rem;
        display: flex;
        justify-content: space-between;
       

        #view {
          color: var(--highlightedColor);
        }
      }
 
      .listItems {
        margin-top: 0.2rem;
        margin-right: 2rem;
        margin-left: 2rem;
        list-style: none;

    
        .stocklist {
          list-style: none;
        }
      }
    }
    .right2 {
      /* border-radius: 30px; */
      display: flex;
      justify-content: space-around;
      #updinvnt {
        height: 4rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 20%;
        background-color: var(--btnColor);
        border-radius: 10px;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        font-family: "Poppins";
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        outline: 0 solid transparent;
        padding: 8px 18px;
        touch-action: manipulation;
        word-break: break-word;
        border: 0;

        &:hover {
          background-color: var(--active);
          color: var(--btnColor);
        }
      }
    }
  }
  .third {
    height: 20rem;
    margin-top: 1rem;
    gap: 1rem;
    height: 15rem;
    border-radius: 15px;
    background-color: var(--bgColor);
  }
  .fourth {
    height: 18rem;
    margin-top: 1rem;
    /* gap: 1rem; */
    height: 30rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .left4 {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      /* gap: 1rem; */

      .left41 {
        border-radius: 15px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        .left411 {
          border-radius: 15px;
          background-color: var(--bgColor);
          height: 13rem;
          overflow: scroll;

          .head {
            margin: 1rem;
            display: flex;
            justify-content: center;
          }
          .listItems {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            margin-right: 2rem;
            margin-left: 2rem;
            list-style: none;
          }
        }
        .left412 {
          /* border-radius: 15px; */
          /* background-color: var(--bgColor); */
          /* display: flex; */
          height: 13rem;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
      }
      .left42 {
        border-radius: 15px;
        
        display: grid;
          grid-template-columns: repeat(2 , 1fr);
          gap: 1rem;
          
          .enquiry{
            border-radius: 15px;
            background-color: var(--bgColor);
            .head {
            margin: 1rem;
            margin-top: 0.5;
            display: flex;
            justify-content: center;
            font-size: 1rem;
          }
          }
          .frequent{
            background-color: var(--bgColor);
            border-radius: 15px;
            .head {
            margin: 1rem;
            margin-top: 0.5;
            display: flex;
            justify-content: center;
            font-size: 1rem;
          }
          }
      }
    }
    .right4 {
      border-radius: 15px;
      /* background-color: var(--bgColor); */
      overflow: hidden;
      padding: 2rem;
      width: 35vw;

      .chartData {
        display: flex;
        justify-content: space-around;
        height: 1.5rem;
        .data {
          border-radius: 20px;
          width: 50px;
          background-color: green;
        }
        .Personal {
          background-color: #176b87;
        }

        .Workers {
          background-color: #ff6666;
        }
        .Phone {
          background-color: #f2be22;
        }
        .Others {
          background-color: #00dfa2;
        }
      }
    }
  }

  .fifth {
    /* margin-top: 1rem; */
    /* padding: 5px; */
    height: 13rem;
    display: flex;
    flex-direction: column;
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    justify-content: space-between;
   
    .fifth1 {

      display: flex;
      justify-content: center;
      #ordered {
        /* margin-top: 1rem; */
        /* margin-bottom: 1rem; */
        padding: 1rem;
        width: 13rem;
        background-color: var(--btnColor);
        border-radius: 10px;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        font-family: "Poppins";
        font-size: 1rem;
        font-weight: 400;
        /* line-height: 24px; */
        outline: 0 solid transparent;
        padding: 12px 18px;
        touch-action: manipulation;
        word-break: break-word;
        border: 0;

        &:hover {
          background-color: var(--active);
          color: var(--btnColor);
        }
      }
    }
    .fifth2 {
      /* border-radius: 30px; */
      /* background-color: var(--bgColor); */
      display: flex;
      justify-content: center;
      #notification {
        /* margin-top: 1rem;
        margin-bottom: 1rem; */
        width: 13rem;
        background-color: var(--btnColor);
        border-radius: 10px;
        box-sizing: border-box;
        color: #ffffff;
        cursor: pointer;
        font-family: "Poppins";
        font-size: 1rem;
        font-weight: 400;
        /* line-height: 24px; */
        /* outline: 0 solid transparent; */
        padding: 12px 18px;
        touch-action: manipulation;
        word-break: break-word;
        border: 0;

        &:hover {
          background-color: var(--active);
          color: var(--btnColor);
        }
      }
    }
    .fifth3 {
      /* border-radius: 30px; */
      /* background-color: var(--bgColor); */
      display: flex;
      justify-content: center;
      #order {
      
        /* margin-bottom: 1rem; */
        width: 13rem;
        background-color: var(--btnColor);
        border-radius: 10px;
        box-sizing: border-box;
        color: #ffffff;
        /* cursor: pointer; */
        font-family: "Poppins";
        font-size: 1rem;
        font-weight: 400;
        line-height: 24px;
        outline: 0 solid transparent;
        padding: 12px 18px;
        touch-action: manipulation;
        word-break: break-word;
        border: 0;

        &:hover {
          background-color: var(--active);
          color: var(--btnColor);
        }
      }
    }
  }
`;

export default Inventory;
