import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TrendData from "../Api/trendData";
import Card from "./Card";
import PopPost from "./PopPost";
import DifferentPost from "./DifferentPost";
import { NavLink } from "react-router-dom";

const Home = () => {
  // const date = new Date().toDateString()
  const [selectItem, setSelectItem] = useState(0);
  const [arr, setArr] = useState(TrendData);

  useEffect(() => {
    setInterval(() => {
      setSelectItem((selectItem) =>
        selectItem < arr.length - 1 ? selectItem + 1 : 0
      );
    }, 3000);
  }, []);
  const {
    img,
    category,
    date,
    heading,
    desc,
    userProfile,
    userName,
    userPosition,
  } = arr[selectItem];
  return (
    <>
      <div className="homeContainer lr-pad">
        <h1 className="trend">Trending</h1>
        <div className="trendContainer">
          <div className="left">
            <div className="leftImg">
              <NavLink exact to="/viewpage">
                <img src={img} alt="food" />
              </NavLink>
            </div>
          </div>
          <NavLink exact to="/viewpage">
            <div className="right">
              <div className="rightContent">
                <p className="category">
                  <span>{category}</span>{" "}
                  <span className="date text">— {date}</span>
                </p>
                <h1 className="heading">{heading}</h1>
                <p className="desc text">{desc}</p>
                <div className="user">
                  <div>
                    <img src={userProfile} alt="user" />
                  </div>
                  <div>
                    <h3>{userName}</h3>
                    <p className=" position text">{userPosition}</p>
                  </div>
                </div>
              </div>
            </div>
          </NavLink>
        </div>

        <div className="dots">
          {arr.map((curr, index) => {
            // console.log(index)
            return (
              <div
                className="dott"
                key={index}
                onClick={() => {
                  setSelectItem(index);
                }}
              >
                <span className="dot"></span>
              </div>
            );
          })}
        </div>
        <Card />
        <PopPost />
        <DifferentPost />
      </div>
    </>
  );
};

export default Home;
