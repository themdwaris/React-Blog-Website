import React from "react";

const NewsLetter = () =>{
    return(
        <>
        <div className="newsContainer">
            <h1 className="newsTitle trend">Subscribe to newsletter</h1>
            <div className="newsBox">
                <div className="input"><input type='email' placeholder="Enter Your Email" required/></div>
                <div className="subsBtn"><button>SUBSCRIBE</button></div>
            </div>
        </div>
        </>
    )
}
export default NewsLetter