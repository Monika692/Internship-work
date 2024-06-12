import React, { useState } from "react";
import styled from "styled-components";
// import img from "../../assets/group.png";
import imgg from "../../assets/1.png";
import imgi from "../../assets/2.png";
import img3 from "../../assets/3.png";

const Staff = () => {
  const [modal, setmodal] = useState(false);
  const [modal1, setmodal1] = useState(false);
  const [modal2, setmodal2] = useState(false);

  const toggleModal = () => {
    setmodal(!modal);
  };

  const toggleModal1 = () => {
    setmodal1(!modal1);
  };

  const toggleModal2 = () => {
    setmodal2(!modal2);
  };

  return (
    <>
      <div className="scrolli">
        <MainContent>
          <h2 style={{ textAlign: "center" }}>Welcome, Sai Grocery Shop!</h2>

          <div className="up">
            <div className="left1">
              <div className="heading">
                <h5>Current Staff</h5>
                <h5 id="viewall">View All &#x2192;</h5>
              </div>
            </div>
            <div className="middle1">
              <div className="heading">
                <h5>Past Staff</h5>
                <h5 id="viewall">View All&#x2192;</h5>
              </div>
            </div>
            <div className="right1">
              <div className="btn1">
                <button className="btn-modal" onClick={toggleModal}>
                  Add New Staff
                </button>
              </div>
              <div className="btn2">
                <button id="search">Search Staff</button>
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="heading">
              <h5>Attendence</h5>
              <h5 id="viewall">View All&#x2192;</h5>
            </div>
          </div>

          <div className="third">
            <div className="left3">
              <div className="heading">
                <h5>Incentives</h5>
                <h5 id="viewall">View All&#x2192;</h5>
              </div>
            </div>
            <div className="right3">
              <div className="heading">
                <h5>Leave</h5>
                <h5 id="viewall">View All&#x2192;</h5>
              </div>
            </div>
          </div>

          {/*FORM fOR Staff Admission */}

          {modal && (
            <div className="modal">
              {/* <div className="overlay"></div> */}
              <div className="form">
                <div className="container">
                  <div className="left"></div>
                  <div className="right">
                    <div className="header">
                      <h3>Personal Details</h3>
                      <p>Enter Your Personal Details</p>
                    </div>

                    <div className="Name">
                      <h5 className="head">Name</h5>
                      <input
                        className="namein"
                        type="text"
                        placeholder="enter your name."
                      />
                    </div>

                    <div className="email">
                      <h5 className="head">Email</h5>
                      <input
                        className="namein"
                        type="email"
                        placeholder="enter your name."
                      />
                    </div>

                    <div className="boxes3">
                      <div className="b1">
                        <h5 className="head">Gender</h5>
                        <select className="dropDown" id="gender" name="gender">
                          <option value="" id="sgndr">
                            select gender
                          </option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="b2">
                        <h5 className="head">Maritul-Status</h5>
                        <select className="dropDown" id="gender" name="gender">
                          <option value="">select status</option>
                          <option value="male">Married</option>
                          <option value="female">Unmarried</option>
                        </select>
                      </div>
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
                    <div className="phnumber">
                      <h5 className="head">phone number</h5>
                      <input
                        className="namein"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="enter your phone number"
                      />
                    </div>
                    <div className="next">
                      {/* <button id="next">Next Page</button> */}
                      <button id="next" onClick={toggleModal1}>
                        Next Page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*second page starts here */}

          {modal1 && (
            <div className="modal">
              <div className="form">
                <div className="container">
                  <div className="left2"></div>

                  <div className="right2">
                    {/*div 1 */}
                    <div className="header">
                      <h3 className="head">Work And Bank Details</h3>
                      <p>
                        please provide your name , email id and phone number{" "}
                      </p>
                    </div>

                    {/*div 2 */}

                    <div className="layer2">
                      <div className="b1">
                        <h5 className="head">Designation</h5>
                        <select className="dropDown" id="gender" name="gender">
                          <option value=""> Select Designation</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="b2">
                        <h5 className="head">Gender</h5>
                        <select className="dropDown" id="gender" name="gender">
                          <option value="">Employement Type</option>
                          <option value="male">Internship</option>
                          <option value="female">Part Time</option>
                          <option value="other">Full Time</option>
                        </select>
                      </div>
                    </div>

                    {/*div 3 */}

                    <div className="layer3">
                      <div className="startdate">
                        <h5 className="head">Start Date</h5>
                        <input
                          className="dropDown"
                          type="date"
                          id="dob"
                          name="dob"
                        />
                      </div>
                      <div className="enddate">
                        <h5 className="head">End Date</h5>
                        <input
                          className="dropDown"
                          type="date"
                          id="dob"
                          name="dob"
                        />
                      </div>
                    </div>

                    {/*div 4 */}

                    {/* <div className="layer4">
                      <h3>Provide Your Bank Details</h3>
                    </div> */}

                    {/*div 5 */}

                    <div className="layer5">
                      <div className="b1">
                        <h5 className="head">Enter Account Number</h5>
                        <input
                          className="namein"
                          type="text"
                          placeholder="enter Account Number"
                        />
                      </div>

                      <div className="b2">
                        <h5 className="head">Maritul-Status</h5>
                        <select className="dropDown" id="gender" name="gender">
                          <option value="">Select status</option>
                          <option value="male">Married</option>
                          <option value="female">Unmarried</option>
                        </select>
                      </div>
                    </div>

                    {/*Div 6 */}

                    <div className="layer6">
                      <h5 className="head">Account Holder Name</h5>
                      <input
                        className="namein"
                        type="text"
                        id="phone"
                        name="phone"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/*Div 7 */}

                    <div className="layer7">
                      {/* <button id="next">Next Page</button> */}
                      {/* <button onClick={toggleModal1}>Previous</button> */}
                      <button
                        onClick={() => {
                          toggleModal2();
                        }}
                      >
                        Next Page
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/*third form page starts here */}

          {modal2 && (
            <div className="modal">
              <div className="form">
                <div className="container">
                  <div className="left3"></div>

                  <div className="rightupld">
                    <div className="header">
                      <h3>Upload Details</h3>
                      <p>Please provide your DOB proof and Adress proof </p>
                    </div>

                    <div className="upld">
                      <h5 className="head">Select DOB Proof</h5>
                      <input
                        type="file"
                        accept="application/pdf"
                        className="uploads"
                        name="fileToUpload"
                        id="upload"
                      />
                      <input className="sbmit" type="submit" value="Upload" />
                    </div>

                    <div className="upld">
                      <h5 className="head">Select Address Proof</h5>
                      <input
                        type="file"
                        className="uploads"
                        name="fileToUpload"
                        id="upload"
                      ></input>
                      <input
                        className="sbmit"
                        type="submit"
                        value="Upload"
                      ></input>
                    </div>

                    <div className="btn3">
                      <button
                        onClick={() => {
                          toggleModal();
                          toggleModal1();
                          toggleModal2();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </MainContent>
      </div>
    </>
  );
};

const MainContent = styled.div`

  height: 100%;

  .b2{
   
    

  }
  .head {
    padding-bottom: 5px;
    opacity: 50%;
    font-weight: 400;
    color: var(--textColor);
  }
  .rightupld {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 2fr;
    width: 80%;
    margin: 3rem;
    display: grid;
    gap: 1rem;

    .btn3 {
      display: flex;
      justify-content: flex-end;
      right: 0;
      

            button {
              margin-top: 0.5rem;
              /* margin-bottom: 1rem; */
              height: 30%;
              width: 30%;
              background-color: var(--btnColor);
              border-radius: 10px;
              box-sizing: border-box;
              color: #ffffff;
              cursor: pointer;
              font-family: "Poppins";
              font-size: 2rem;
              font-weight: 400;
              font-size: 1.25rem;
              line-height: 24px;
              outline: 0 solid transparent;
              padding: 8px 18px;
              touch-action: manipulation;
              word-break: break-word;
              border: 0;
              transform: all 0.15s;

              &:hover {
                background-color: var(--active);
                color: var(--btnColor);
              }
            }
          }
  }
  .uploads {
    width: 13rem;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 1rem;
    font-size: 16px;
  }

  .sbmit {
    background-color: var(--textColor);
    width: 8rem;
    padding: 10px;
    margin-left: 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
  }

  .modal {
    margin-left: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    width: 90%;
    height: 100%;
    /* background-color: var(--popupColor); */
    background-color: var(--baseColor);
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    .namein {
      /* margin-top: 0.5rem; */
      width: 13rem;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 1rem;
      font-size: 16px;
    }
    .dropDown {
      width: 8rem;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 1rem;
      font-size: 16px;
    }

    .form {
      width: 100%;
      height: 100%;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .container {
        border-radius: 10px;
        width: 80%;
        height: 90%;
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 2rem;

        .left {
          margin: 1rem;
          margin-right: 0;
          /* margin-bottom: 3rem; */
          border-radius: 43px;
          overflow: hidden;
          background-image: url(${imgg});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;

          .leftcontent {
            /* margin-top: 2rem;
            padding: 3rem; */
            height: 20rem;
            width: 0.5em;
          }
        }

        .left2 {
          margin: 1rem;
          margin-right: 0;
          border-radius: 43px;
          overflow: hidden;
          background-image: url(${imgi});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;

          .leftcontent {
            /* margin-top: 2rem;
            padding: 3rem; */
            height: 20rem;
            width: 0.5em;
          }
        }
        .left3 {
          margin: 1rem;
          margin-right: 0;
          border-radius: 43px;
          overflow: hidden;
          background-image: url(${img3});
          background-size: cover;
          background-position: center;
          display: flex;
          justify-content: center;
          align-items: center;

          .leftcontent {
            height: 20rem;
            width: 0.5em;
          }
        }
        .right3 {
          width: 80%;
          margin: 3rem;
          display: grid;
          gap: 1rem;
          grid-template-rows: repeat(6, 1fr);
        }

        .right2 {
          width: 80%;
          margin: 3rem;
          display: grid;
          gap: 1rem;
          grid-template-rows: repeat(6, 1fr);

          .layer2 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .layer3 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .layer4 {
            height: 2rem;
          }

          .layer5 {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            margin-left: 0;
          }

          .layer7 {
            display: flex;
            justify-content: flex-end;

            button {
              margin-top: 0.5rem;
              /* margin-bottom: 1rem; */
              height: 60%;
              width: 30%;
              background-color: var(--btnColor);
              border-radius: 10px;
              box-sizing: border-box;
              color: #ffffff;
              cursor: pointer;
              font-family: "Poppins";
              font-size: 2rem;
              font-weight: 400;
              font-size: 1.25rem;
              line-height: 24px;
              outline: 0 solid transparent;
              padding: 8px 18px;
              touch-action: manipulation;
              word-break: break-word;
              border: 0;
              transform: all 0.15s;

              &:hover {
                background-color: var(--active);
                color: var(--btnColor);
              }
            }
          }
        }

        .right {
          width: 80%;
          margin: 3rem;
          display: grid;
          gap: 1rem;
          grid-template-rows: repeat(6, 1fr);
          .Name {
          }
          .boxes3 {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            margin-left: 0;
          }
          .next {
            display: flex;
            justify-content: flex-end;

            button {
              margin-top: 0.5rem;
              /* margin-bottom: 1rem; */
              height: 60%;
              width: 30%;
              background-color: var(--btnColor);
              border-radius: 10px;
              box-sizing: border-box;
              color: #ffffff;
              cursor: pointer;
              font-family: "Poppins";
              font-size: 2rem;
              font-weight: 400;
              font-size: 1.25rem;
              line-height: 24px;
              outline: 0 solid transparent;
              padding: 8px 18px;
              touch-action: manipulation;
              word-break: break-word;
              border: 0;
              transform: all 0.15s;

              &:hover {
                background-color: var(--active);
                color: var(--btnColor);
              }
            }
          }
          .next1 {
            display: flex;
            justify-content: space-between;

            button {
              margin-top: 1rem;
              margin-bottom: 1rem;
              width: 80%;
              background-color: var(--btnColor);
              border-radius: 20px;
              box-sizing: border-box;
              color: #ffffff;
              cursor: pointer;
              font-family: "Poppins";
              font-size: 2rem;
              font-weight: 400;
              font-size: 1.25rem;
              line-height: 24px;
              outline: 0 solid transparent;
              padding: 8px 18px;
              touch-action: manipulation;
              word-break: break-word;
              border: 0;
              transform: all 0.15s;

              &:hover {
                background-color: var(--active);
                color: var(--btnColor);
              }
            }
          }
        }
      }
    }
  }
  .up {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    height: 11rem;
    background-color: var(--baseColor);
    .left1 {
      border-radius: 15px;
      background-color: var(--bgColor);
      .heading {
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        opacity: 50%;
        font-weight: 400;
        color: var(--textColor);

        #viewall {
          color: var(--highlightedColor);
        }
      }
    }
    .middle1 {
      border-radius: 10px;
      background-color: var(--bgColor);
      .heading {
        /* margin: 1.5rem; */
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        opacity: 50%;
        font-weight: 400;
        color: var(--textColor);

        #viewall {
          color: var(--highlightedColor);
        }
      }
    }
    .right1 {
      border-radius: 15px;
      /* background-color: var(--bgColor); */
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      .btn1 {
        display: flex;
        justify-content: center;
        .btn-modal {
          margin-top: 1rem;
          margin-bottom: 1rem;
          width: 80%;
          background-color: var(--btnColor);
          border-radius: 20px;
          box-sizing: border-box;
          color: #ffffff;
          cursor: pointer;
          font-family: "Poppins";
          font-size: 2rem;
          font-weight: 400;
          font-size: 1.25rem;
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
      .btn2 {
        display: flex;
        justify-content: center;
        #search {
          margin-top: 1rem;
          margin-bottom: 1rem;
          width: 80%;
          background-color: var(--btnColor);
          border-radius: 20px;
          box-sizing: border-box;
          color: #ffffff;
          cursor: pointer;
          font-family: "Poppins";
          font-size: 2rem;
          font-weight: 400;
          font-size: 1.25rem;
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
  }
  .middle {
    margin-top: 2rem;
    gap: 1rem;
    height: 17rem;
    background-color: var(--bgColor);
    border-radius: 15px;
    .heading {
      padding: 1.5rem;
      display: flex;
      justify-content: space-between;
      padding: 1.5rem;
      opacity: 50%;
      font-weight: 400;
      color: var(--textColor);

      #viewall {
        color: var(--highlightedColor);
      }
    }
  }
  .third {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    height: 17rem;
    background-color: var(--baseColor);
    .left3 {
      border-radius: 15px;
      background-color: var(--bgColor);
      .heading {
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        padding: 1.5rem;
        opacity: 50%;
        font-weight: 400;
        color: var(--textColor);

        #viewall {
          color: var(--highlightedColor);
        }
      }
    }
    .right3 {
      border-radius: 15px;
      background-color: var(--bgColor);
      .heading {
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        opacity: 50%;
        font-weight: 400;
        color: var(--textColor);

        #viewall {
          color: var(--highlightedColor);
        }
      }
    }
  }
`;

export default Staff;