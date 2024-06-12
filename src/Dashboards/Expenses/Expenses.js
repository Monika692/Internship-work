import React from "react";
import styled from "styled-components";
import { HiTrendingUp } from "react-icons/hi";
import { HiTrendingDown } from "react-icons/hi";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Expenses = () => {
  const data = [
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

  return (
    <>
      <div className="scrolli">
        <MainContent>
          <h2 style={{ textAlign: "center" }}>Welcome, Sai Grocery Shop!</h2>
          <Up>
            <div className="expBox" id="expBox-1">
              <div className="headings">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Profit / Months
                </h5>
              </div>
              <div className="data">
                <h2>$12345</h2>
                <div className="content success">
                  <h5>+10%</h5>
                  <HiTrendingUp />
                </div>
              </div>
            </div>
            <div className="expBox" id="expBox-2">
              <div className="headings">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Top Selling
                </h5>
              </div>
              <div className="data">
                <h2>$12345</h2>
                <div className="content fail">
                  <h5>-10%</h5>
                  <HiTrendingDown />
                </div>
              </div>
            </div>
            <div className="expBox" id="expBox-3">
              <div className="headings">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  {" "}
                  Gross Profit
                </h5>
              </div>
              <div className="data">
                <h2>$12345</h2>
                <div className="content success">
                  <h5>+10%</h5>
                  <HiTrendingUp />
                </div>
              </div>
            </div>
            <div className="expBox" id="expBox-4">
              <div className="headings">
                <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                  Net Profit
                </h5>
              </div>
              <div className="data">
                <h2>$12345</h2>
                <div className="content fail">
                  <h5>+10%</h5>
                  <HiTrendingDown />
                </div>
              </div>
            </div>
          </Up>

          <Mid>
            <div className="midup">
              <h5 style={{ opacity: "50%", fontWeight: "400" }} className="head">
                Transactions In
              </h5>
            </div>
            <div className="middown">
              <h5 style={{ opacity: "50%", fontWeight: "400" }} className="head">
                Transactions out
              </h5>
            </div>
          </Mid>

          <Down>
            <div className="right">
              <div className="DownBox" id="DownBox-1">
                <div className="headings">
                  <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                    Profit / Months
                  </h5>
                </div>
                <div className="data">
                  <h2>
                    $12345{" "}
                    <span
                      style={{
                        color: "var(--highlightedColor)",
                        fontSize: "17px",
                      }}
                    >
                      .33
                    </span>
                  </h2>
                  <div className="content success">
                    <h5>+10%</h5>
                    <HiTrendingUp />
                  </div>
                </div>
              </div>
              <div className="DownBox" id="DownBox-2">
                <div className="headings">
                  <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                    Profit / Months
                  </h5>
                </div>
                <div className="data">
                  <h2>
                    $12345{" "}
                    <span
                      style={{
                        color: "var(--highlightedColor)",
                        fontSize: "17px",
                      }}
                    >
                      .33
                    </span>{" "}
                  </h2>
                  <div className="content success">
                    <h5>+10%</h5>
                    <HiTrendingUp />
                  </div>
                </div>
              </div>
              <div className="DownBox" id="DownBox-3">
                <div className="headings">
                  <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                    Profit / Months
                  </h5>
                </div>
                <div className="data">
                  <h2>
                    $12345{" "}
                    <span
                      style={{
                        color: "var(--highlightedColor)",
                        fontSize: "17px",
                      }}
                    >
                      .33
                    </span>
                  </h2>
                  <div className="content fail">
                    <h5>+10%</h5>
                    <HiTrendingUp />
                  </div>
                </div>
              </div>
              <div className="DownBox" id="DownBox-4">
                <div className="headings">
                  <h5 style={{ opacity: "50%", fontWeight: "400" }}>
                    Profit / Months
                  </h5>
                </div>
                <div className="data">
                  <h2>
                    $12345
                    <span
                      style={{
                        color: "var(--highlightedColor)",
                        fontSize: "17px",
                      }}
                    >
                      .33
                    </span>
                  </h2>
                  <div className="content fail">
                    <h5>+10%</h5>
                    <HiTrendingUp />
                  </div>
                </div>
              </div>
            </div>

            <div className="left">
              <div className="chartData">
                <div className="data Personal"></div>Personal
                <div className="data Workers"></div> Workers
                <div className="data Phone"></div>Phone
                <div className="data Others"></div>Others
              </div>
              <div className="Pie">
                <PieChart width={450} height={450}>
                  <Pie
                    data={data}
                    
                
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={130}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={9}
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        cornerRadius={10}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>
          </Down>
        </MainContent>
      </div>
    </>
  );
};

const Down = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 35rem;

  gap: 1rem;

  .right {
    gap: 1rem;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    .DownBox {
      &:hover {
        background-color: var(--hover);
      }
      .headings {
        margin-top: 1rem;
        margin-left: 0rem;
        opacity: 50%;
      }
      padding: 0 2rem 0rem 2rem;
      border-radius: 15px;
      background-color: var(--bgColor);
      .data {
        margin-top: 1rem;
        align-items: center;
        display: flex;
        justify-content: space-between;

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
    }
  }

  .left {
    overflow: hidden;
    padding: 2rem;
    border-radius: 3rem;
    /* background-color: var(--bgColor); */
    width: 40vw;

      
    /* .Pie{
      justify-content: center;
    } */
    .chartData {
      margin-top: 1rem;
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
`;

const Mid = styled.div`
  /* padding: 2rem; */
 
  margin-top: 1rem;
  height: 30rem;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  .midup{
    border-radius: 15px;
    background-color: var(--bgColor);
    .head{
      padding-top: 0.5rem;
      padding: 1.5rem;
    }
  }
  .middown{
    border-radius: 15px;
    background-color: var(--bgColor);
    .head{
      padding-top: 0.5rem;
      padding: 1.5rem;
    }
  }
`;

const MainContent = styled.div`
  height: 100%;
`;

const Up = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  height: 10rem;
  background-color: var(--baseColor);
  .expBox {
    border-radius: 15px;
    background-color: var(--bgColor);
    padding: 2rem;
    .data {
      margin-top: 1rem;
      align-items: center;
      display: flex;
      justify-content: space-between;

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
  #expBox-1 {
  }
`;
export default Expenses;
