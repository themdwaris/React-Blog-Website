import React from "react";
import { NavLink } from "react-router-dom";
import Card from "../Api/cardData";

const Common = () => {
  return (
    <>
      <div className="sportBusiBox">
        {Card.map((currElem, index) => {
          const {
            img,
            category,
            date,
            heading,
            userProfile,
            userName,
            userPosition,
          } = currElem;
          return (
            <NavLink exact to="/viewpage" key={index}>
              <div className="sbLeft hovr">
                <div className="innerContainer">
                  <div className="sbImg">
                    <img src={img} alt="img" />
                  </div>
                  <div className="sbContent">
                    <p className="category">
                      <span>{category}</span>{" "}
                      <span className="date text">— {date}</span>
                    </p>
                    <h3 className="heading">{heading}</h3>
                    <div className="user">
                      <div>
                        <img src={userProfile} alt="logo" />
                      </div>
                      <div>
                        <h3 className="userName">{userName}</h3>
                        <p className="userPosition text">{userPosition}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Common;
