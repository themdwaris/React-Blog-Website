import React from "react";
import { useEffect } from "react";

const GotoTop = () => {
  const toScroll = () => {
    let height = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    let goto = document.querySelector(".topContainer");
    if (winScroll > height) {
      goto.style.display = "block";
    } else {
      goto.style.display = "none";
    }
  };
  const goTo = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", toScroll);
    return () => window.removeEventListener("scroll", toScroll);
  }, []);

  return (
    <>
      <div className="topContainer" onClick={goTo}>
        <div className="topICon">
          <ion-icon name="arrow-up-outline"></ion-icon>
        </div>
      </div>
    </>
  );
};
export default GotoTop;
