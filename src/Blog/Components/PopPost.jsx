import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import PopPostData from "../Api/popularPost";


const PopPost = () => {
  const [select, setSelect] = useState(0);
  const [arr, setArr] = useState(PopPostData);

  return (
    <>
      <div className="popPostContainer">
        <h1 className="trend">Popular Posts</h1>
        <div id="pop" className="popPostBox">
          {PopPostData.map((currElem, index) => {
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
                <div className="postBox hovr">
                  <div className="postImg">
                    <img src={img} alt="postImg" />
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

        <div className="dots">
          {arr.map((curr, index) => {
            // console.log(index)

            return (
              <div
                className="dott"
                key={index}
                onClick={() => {
                  setSelect(index);
                  // const get = document.getElementById("pop");
                  // get.classList.add('scrollx')
                }}
              >
                <span className="dot"></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PopPost;
