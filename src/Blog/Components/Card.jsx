import React from "react";
import "../Style/Style.css";
import cardData from "../Api/cardData";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <>
      <div className="cardContainer">
        <h1 className="trend">Posts</h1>
        <div className="cardBox">
          {cardData.map((currElem, index) => {
            const {
              img,
              category,
              date,
              heading,
              desc,
              userProfile,
              userName,
              userPosition,
            } = currElem;
            return (
              <NavLink exact to="/viewpage" key={index}>
                <div className="card hovr">
                  <div className="cardImg">
                    <img src={img} alt="blogimg" />
                  </div>
                  <div className="content">
                    <p className="category">
                      <span>{category}</span>{" "}
                      <span className="date text">— {date}</span>
                    </p>
                    <h2 className="heading">{heading}</h2>
                    <p className="desc text">{desc}</p>
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
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;
