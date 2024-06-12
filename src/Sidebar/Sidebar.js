import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";


import { MdSpaceDashboard } from "react-icons/md";
import { FaMoneyCheck } from 'react-icons/fa'; 
import { BsFire } from 'react-icons/bs'; 
import { RiFileListFill } from "react-icons/ri";
import { FaStore } from "react-icons/fa";
// import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { AiTwotonePieChart } from "react-icons/ai";
import { SiFiles } from "react-icons/si";
import { FaTruck } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";

import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { BsFillPeopleFill } from "react-icons/bs";
import scrollreveal from "scrollreveal";

export default function Sidebar() {

  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "30px",
      duration: 500,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
        .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .links>ul>li:nth-of-type(8),
      .links>ul>li:nth-of-type(9),
      .links>ul>li:nth-of-type(10),
      .links>ul>li:nth-of-type(11),

      .logout
      `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
         
            <span>Exponance.</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>

              <li
           
              >
                <NavLink to="/">
                  <MdSpaceDashboard />
                  <span> General</span>
                </NavLink>
              </li>
              <li
                
              >
                <NavLink to="/Revenue">
                <FaMoneyCheck /> 
                  <span> Revenue</span>
                </NavLink>
              </li>
              <li
               
              >
                <NavLink to="/Expenses">
                <BsFire /> 
                  <span> Expenses</span>
                </NavLink>
              </li>
              <li
             
              >
                <NavLink to="/Transaction">
                  <RiFileListFill />
                  <span> Transactions</span>
                </NavLink>
              </li>
              <li
              
              >
                <NavLink to ="/Inventory">
                  <FaStore />
                  <span> Inventory</span>
                </NavLink>
              </li>
              {/* <li
                
              >
                <NavLink to ="/Billing">
                  <FaMoneyBillTrendUp />
                  <span> Billings</span>
                </NavLink>
              </li> */}
              <li
            
              >
                <NavLink to ="/Debt">
                  <FaUserLarge />
                  <span> Debt</span>
                </NavLink>
              </li>
               <li
              
              >
                <NavLink to ="/Lending">
                  <AiTwotonePieChart />
                  <span> Lending</span>
                </NavLink>
              </li>
              <li
              
              >
                <NavLink to ="/Distributor">
                  <SiFiles />
                  <span> Distributors</span>
                </NavLink>
              </li>
              <li

              >
                <NavLink to ="/Rentals">
                  <FaTruck />
                  <span> Bills & Rentals</span>
                </NavLink>
              </li>
              <li
               
              >
                <NavLink to ="/Staff">
                  <BsFillPeopleFill />
                  <span> Staff & Management</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        
        
      </Section>
    </>
  );
}
const Section = styled.section`

  left: 0;
  background-color: --bgColor;
  height: auto;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
   
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: gold;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: var(--btnColor);
        color:gold;
        font-weight: 400;
        /* font-family: "Permanent Marker", cursive; */
      }
    }
    .links {
      display: flex;
      padding-left: 10%;
      /* justify-content: center; */
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.8rem;
          &:hover {
            
            a {
              color: var(--btnColor);
            }
          }
          a {
            text-decoration: none;
            display: flex;
            gap: 1rem;
            color: var(--textColor);
          }
        }
        .active {
          padding: 0.5rem 1rem;
          align-items: center;
          height: 2rem;
          border-radius: 0.8rem;
          transition: 100ms;
          background-color: var(--btnColor);
          color:var(--active);
          
          &:hover{
            color:var(--active);
          }
          a {
            color:var(--textColor);
          }
        }
      }
    }
  }

`;

