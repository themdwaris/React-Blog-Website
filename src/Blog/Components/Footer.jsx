import React from "react";
import GotoTop from "./goToTop";
import NewsLetter from "./NewsLetter";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <NewsLetter />
      <div className="footerContainer lr-pad">
        <div className="footerIcon same">
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-linkedin"></ion-icon>
          <ion-icon name="logo-youtube"></ion-icon>
        </div>
        <div className="footerText same">
          <p className="copyright">
            Copyright © {year} All rights reserved | This template is made with
            ❤️ by{" "}
            <a href="https://themdwaris.netlify.app" target="_blank">
              Waris
            </a>
          </p>
          <p className="tc">
            <span className="tc">Terms & Conditions</span> /{" "}
            <span className="tc">Privacy Policy</span>
          </p>
        </div>
        <GotoTop />
      </div>
    </>
  );
};
export default Footer;
