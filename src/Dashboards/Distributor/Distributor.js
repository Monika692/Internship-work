import React from "react";
import styled from "styled-components";

const Debt = () => {
  return (
    <>
      <div className="scrolli">
        <MainContent>
          <h2 style={{ textAlign: "center" }}>Welcome, Sai Grocery Shop!</h2>
          <Up>
            <div className="Box" id="Box-1">
              Box-1
            </div>
            <div className="Box" id="Box-2">
              Box-2
            </div>
            <div className="Box" id="Box-3">
              Box-3
            </div>
          </Up>
          <Form>
         
            <div className="form">
              <div className="lfrom">
                <div className="inputFrom">
                  <div style={{marginBottom:'0.5rem'}} className="labels">

               
                  <span>Name</span>
                  </div>
                  <input className="textFeild" type="Enter Name" placeholder="enter name"/>
                </div>
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">
                  <span className = 'heds'>Amount</span>
                  </div>
                  <input className="textFeild" type="Enter Name" placeholder="enter amount" />
                </div>

              <div className="flex">

            
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">
                  <span className = 'heds'>Installments</span>
                  </div>
                  <input className="textFeild" type="Enter Name" placeholder="" />
                </div>
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">
                  <span className = 'heds'>Intrest/Time</span>
                  </div>
                  <input className="textFeild" type="Enter Name" placeholder="% per month"/>
                </div>

                </div>
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">
                  <span className = 'heds'>Phone Number</span>
                  </div>
                  <input className="textFeild"type="Enter Name" placeholder="enter phone number."/>
                </div>
        <div className="address">

       
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">
                  <span className = 'heds'>Address</span>
                  </div>
                  <textarea className="textArea" name="" id="" cols="30" rows="10"></textarea>
                </div>

                </div>
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">
                  <span className = 'heds'>Remaining Payment</span>
                  </div>
                  <input className="textFeild" type="Enter Name" placeholder="enter remaining payment" />
                </div>
                <div className="inputFrom">
                <div style={{marginBottom:'0.5rem'}} className="labels">  
                  <span className = 'heds'>Payment Date</span>
                  </div>
                  <input className="textFeild" type="Enter Name" placeholder="enter payment date" />
                </div>
              </div>

              <div className="rpart">

                <h2 className="adding">add a new distributor.</h2>
                <div className="cirlce"></div>
                <div className="Button">
                  <div className="notif">
                    <p>Send Notification</p>
                  </div>
                  <div className="add"> 
                  <p>Add Debt</p>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        </MainContent>
      </div>
    </>
  );
};

const Form = styled.div`
  margin-top: 1rem;
  height: 60rem;
  background-color: var(--bgColor);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  .heds{
        margin-bottom: 5rem;
      }

  .vdo {
    position: relative;
    z-index: 30000;
    height: 3rem;
    background-image: url(./group.png);
  }

  .form {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    height: 97rem;

    .inputFrom{
      margin: 1rem;
      
      .textArea{
        padding: 1rem;
        width: 100%;
        border-radius: 10px;
      }
      .textFeild{
        font-family: 'Poppins';
        padding-left: 1rem;
        border-radius: 10px;
        height: 2.75rem;
        width: 100%;
    
      }

      .address{
        
      }
    }

    .flex{
      display: flex;
    }
    .rpart {
          .Button{
           
            display: flex;
            position: relative;
            margin-top: 3rem;
            justify-content: space-evenly;
            .notif{
              border-radius: 0.5rem;
              padding: 0.3rem 2rem;
              color: white;
              background-color: var(--btnColor);
              transition: 0.15s;
            }
            .notif:hover{
              color: var(--btnColor);
              background-color: var(--active);
            }
            .add{
              border-radius: 0.5rem;
              padding: 0.3rem 2rem;
              background-color: var(--btnColor);
              color: white;
              
              
            }
            .add:hover{
              color: var(--btnColor);
              background-color: var(--active);
            }
          }
      .adding{
        font-size: 2.5rem;
        font-weight: 600;
        z-index: 2;
        text-align: right;
        position: relative;
        margin-left: 55%;
        right: 0;
        color: white;
      }
      .cirlce {
   
        position: relative;
        left: 30%;
        top: -30%;
        height: 40rem;
        width: 40rem;
        border-radius: 50%;
        background-color: var(--btnColor);
      }
    }
  }
`;

const Up = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 18em;
  gap: 1rem;

  .Box {
    padding: 2rem;
    border-radius: 1%;
    background-color: var(--bgColor);
  }
`;

const MainContent = styled.div`
  height: 100%;
`;

export default Debt;
