import React from "react";
import Common from "./Common";

const Category = () =>{
    return(
        <>
            <div className="categoContainer lr-pad">
                <div className="categoryContent">
                    <span className="text">CATEGORIES</span>
                    <h1>'Business'</h1>
                    <div className="cardContainer">
                        <Common/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category