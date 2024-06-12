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

          
                <div className="inputFrom">
               
                <div className="b3">
                        <h5 className="head">DOB</h5>

                        <input
                          className="dropDown"
                          type="date"
                          id="dob"
                          name="dob"
                        />
                      </div>
                     
                </div>
                
                <div className="b2">
                        <h5 className="head">Type</h5>
                        <select className="dropDown1" id="gender" name="gender">
                          <option value="">select Type</option>
                          <option value="male">Type 1</option>
                          <option value="female">Type 2</option>
                        </select>
                      </div>
                      <div className="Button">
                  <div className="notif">
                    <p>Send Notification</p>
                  </div>
                  <div className="add"> 
                  <p>Add Rental</p>
                  </div>
                </div>
             
              </div>

              <div className="rpart">

                <h2 className="adding">add a new Bill/Rental.</h2>
                <div className="cirlce"></div>
              
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
  height: 40rem;
  background-color: var(--bgColor);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 1fr;

  .Button{
         
            text-align: center;
           gap:1rem;
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
       margin-right: 10%;
       margin-left: 40%;
       right: 0;
       color: white;
     }
  .head{
    font-size: 1rem;
    font-weight: 400;
  }
  .b2{
    padding: 1rem;
  }
  .dropDown1{
    margin-top: 0.2rem;
    border: solid;
    border-radius: 10px;
    width: 105%;
    height: 3rem ;
    font-family: 'Poppins';
  }
  .dropDown{
    border-radius: 10px;
    padding: 0.6rem;
        height: 1.5rem;
        width: 100%;
      }

  .heds{
        margin-bottom: 5rem;
      }


  .form {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    height: 30rem;

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
         
      .cirlce {
   
        position: relative;
        left: 30%;
        top: -50%;
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
  height: 10rem;
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
