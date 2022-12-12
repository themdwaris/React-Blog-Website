import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Style.css";

const Navbar = () => {
  const toScroll = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    let menu = document.getElementById("nav");
    let menu2 = document.querySelector(".span");
    if (winScroll > height) {
      menu.classList.add("sticky");
      menu2.style.display = "inline-block";
    } else {
      menu.classList.remove("sticky");
      menu2.style.display = "none";
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", toScroll);
    return () => window.removeEventListener("scroll", toScroll);
  }, []);

  return (
    <>
      <div className="navbarContainer lr-pad">
        <div className="navbar">
          <div className="searchBar item1">
            <form>
              <ion-icon name="search-outline"></ion-icon>
              <input type="search" placeholder="Search" />
            </form>
          </div>
          <div className="logo item2">
            <NavLink to="/">
              <h1>BLOG</h1>
            </NavLink>
          </div>
          {/* <div className="socialMenubar"> */}
          <div className="socialBox item3">
            <div className="sIcon">
              <a>
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a>
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a>
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </div>
          </div>
          <div
            id="nav"
            className="humburger item4"
            onClick={() => {
              document.getElementById("ul").style.right = "0";
            }}
          >
            <span className="span">MENU</span>
            <ion-icon id="sticky" name="menu-outline"></ion-icon>
          </div>
        </div>
        {/* menu */}
        <div className="menuContainer">
          <ul
            id="ul"
            onClick={() => {
              document.getElementById("ul").style.right = "-280px";
            }}
          >
            <li>
              <ion-icon
                id="close"
                name="close-outline"
                onClick={() => {
                  document.getElementById("ul").style.right = "-280px";
                }}
              ></ion-icon>
            </li>
            <li>
              <NavLink exact activeclassname="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeclassname="active" to="/category">
                Categories
              </NavLink>
              <ion-icon id="arrow" name="chevron-forward-outline"></ion-icon>
            </li>
            <li>
              <NavLink exact activeclassname="active" to="/travel">
                Travel
              </NavLink>
            </li>
            <li>
              <NavLink exact activeclassname="active" to="/food">
                Food
              </NavLink>
            </li>
            <li>
              <NavLink exact activeclassname="active" to="/tech">
                Technology
              </NavLink>
            </li>
            <li>
              <NavLink exact activeclassname="active" to="/business">
                Business
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
