import React, { PureComponent } from "react";
import styled from "styled-components";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";
import {
  ComposedChart,
  Cell,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  PieChart,
  Pie,
  Sector,
} from "recharts";

const MainContent = styled.div`
  height: 100%;

  .revenuediv {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    height: 10rem;
    background-color: var(--baseColor);

    .card {
      border-radius: 15px;
      background-color: var(--bgColor);
      padding: 2rem;
      .money {
        margin-top: 1rem;
        align-items: center;
        display: flex;
        justify-content: space-between;

        /* #c1data {
          padding-right: 2rem;
        } */

        .content {
          display: flex;
          justify-content: space-between;
        }
        .success {
          padding: 0.5rem;
          border-radius: 20px;
          background-color: var(--success);
        }
        .fail {
          padding: 0.5rem;
          border-radius: 20px;
          background-color: var(--fail);
        }
      }
      &:hover {
        background-color: var(--hover);
      }
    }
  }

  .buttondiv {
    text-align: right;
    /* height: 100%; */
    margin: 1.2rem 0.6rem;

    #button-34 {
      background: var(--btnColor);
      border-radius: 20px;
      box-sizing: border-box;
      color: #ffffff;
      cursor: pointer;
      font-family: "Poppins";
  
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      outline: 0 solid transparent;
      padding: 8px 18px;

    
      word-break: break-word;
      border: 0;
      transition: all 0.15s;
    }
    #button-34:hover {
      color: var(--btnColor);
      background: var(--textColor);
    }
  }

  .tableexpenses {
    display: grid;
    grid-template-columns: 1fr 1fr;

    border-radius: 15px;
    margin-top: 1rem;
    height: 30rem;
    grid-gap: 20px;

    .transactiontble {
      border-radius: 15px;
      background-color: var(--bgColor);

      .tblehead {
        padding: 1.5rem;
        opacity: 50%;
        font-weight: 400;
        color: var(--textColor);
      }
    }

    .expensetble {
      border-radius: 15px;
      background-color: var(--bgColor);
      .tblehead {
        padding: 1.5rem;
        opacity: 50%;
        font-weight: 400;
        color: var(--textColor);
      }
    }
  }

  .salesreport {
    border-radius: 15px;
    margin-top: 1rem;
    height: 30rem;
    /* background-color: var(--bgColor); */
    .saleshead {
      padding: 1.5rem;
      opacity: 50%;
      font-weight: 400;
      color: var(--textColor);
    }
  }

  .chartgraph {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 37rem;
    gap: 0rem;

    .left {
      overflow: scroll;
      display: flex;
      justify-content: center;
      align-items: center;
      /* grid-template-rows: 1fr 1fr; */
      /* grid-gap: 1rem; */
      .left1 {
        /* padding: 1rem; */
        border-radius: 15px;
        background-color: var(--baseColor);
        .lefthead {
          padding: 1.5rem;
          opacity: 50%;
          font-weight: 400;
          color: var(--textColor);
        }
      }

    }
    .right {
      /* padding: 1rem; */
      /* border-radius: 2rem; */
      /* background-color: var(--bgColor); */
      display: flex;
      align-items: center;
      justify-content: center;
      .graph {
        /* margin: 4rem 0; */
      }
    }
  }

  .money span {
    color: var(--btnColor);
    font-size: medium;
  }
  .pmethod {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Revenue = () => {
  const data1 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
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

  const data = [
    {
      name: "Page A",
      cheque: 590,
      upi: 800,
      cash: 1400,
      card: 490,
    },
    {
      name: "Page B",
      cheque: 868,
      upi: 967,
      cash: 1506,
      card: 590,
    },
    {
      name: "Page C",
      cheque: 1397,
      upi: 1098,
      cash: 989,
      card: 350,
    },
    {
      name: "Page D",
      cheque: 1480,
      upi: 1200,
      cash: 1228,
      card: 480,
    },
    {
      name: "Page E",
      cheque: 1520,
      upi: 1108,
      cash: 1100,
      card: 460,
    },
    {
      name: "Page F",
      cheque: 1400,
      upi: 680,
      cash: 1700,
      card: 380,
    },
  ];

  return (
    <>
      <div className="scrolli">
        <MainContent>
          <h2 style={{ textAlign: "center" }}>Welcome, Sai Grocery Shop!</h2>

          <div className="revenuediv">
            <div className="card" id="card-1">
              <div className="cardheading">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Total Revenue
                </h5>
              </div>
              <div className="money">
                <h2 id="c1data">₹67563</h2>
                <div className="content success">
                  <h5>+10%</h5>
                  <HiTrendingUp />
                </div>
              </div>
            </div>
            <div className="card" id="card-1">
              <div className="cardheading">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Today Revenue
                </h5>
              </div>
              <div className="money">
                <h2 id="c1data">₹67563</h2>
                <div className="content fail">
                  <h5>-10%</h5>
                  <HiTrendingDown />
                </div>
              </div>
            </div>

            <div className="card" id="card-1">
              <div className="cardheading">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Weekly Revenue
                </h5>
              </div>
              <div className="money">
                <h2 id="c1data">₹67563</h2>
                <div className="content success">
                  <h5>+10%</h5>
                  <HiTrendingUp />
                </div>
              </div>
            </div>

            <div className="card" id="card-1">
              <div className="cardheading">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Monthly Revenue
                </h5>
              </div>
              <div className="money">
                <h2 id="c1data">₹67563</h2>
                <div className="content fail">
                  <h5>-10%</h5>
                  <HiTrendingDown />
                </div>
              </div>
            </div>
          </div>

          <div className="buttondiv">
            <button id="button-34">Export Data</button>
          </div>

          <div className="tableexpenses">
            <div className="transactiontble">
              {/* <Lasttransaction /> */}
              <h5 className="tblehead">Last Transactions</h5>
            </div>
            <div className="expensetble">
              {/* <Totalexpenses /> */}
              <h5 className="tblehead">Total Expenses</h5>
            </div>
          </div>

          <div className="salesreport">
            <h5 className="saleshead">Sales Report</h5>
            {/* <Salesreport /> */}
          </div>

          <div className="chartgraph">
            <div className="left">
              <div className="left1">
                <div className="pie" >
                  <PieChart style={{marginLeft:'0rem'}} width={500} height={500}>
                    <Pie
                      data={data1}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={140}
                      fill="#8884d8"
                      dataKey="value"
                      paddingAngle={5}
                    >
                      {data1.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          cornerRadius={15}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                  <h5 style={{textAlign:'center'}}>Enquiry Sources</h5>
                </div>
                <div></div>
              </div>
            
            </div>
            <div className="right">
              <div className="graph">
                <ComposedChart
                  width={500}
                  height={500}
                  data={data}
                  margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20,
                  }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" scale="band" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="cash"
                    fill="#8884d8"
                    stroke="#8884d8"
                  />
                  <Bar dataKey="upi" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="cheque" stroke="#ff7300" />
                  <Scatter dataKey="card" fill="red" />
                </ComposedChart>
                <div className="pmethod">
                  <h5 className="pmethod">Payment Methods</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="pie" style={{marginLeft:'30%'}}>
          <h2  style={{marginLeft:'15%'}}>Enquires Replied</h2>
                <PieChart width={500} height={500}>
                  <Pie
                    data={data1}
                    // cx="50%"
                    // cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={5}
                  >
                    {data1.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        cornerRadius={15}
                      />
                    ))}
                  </Pie>
                </PieChart>
      
                </div>
        </MainContent>
      </div>
    </>
  );
};

export default Revenue;
