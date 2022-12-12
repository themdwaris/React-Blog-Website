import React from "react";
import Card from '../Api/cardData';
import Common from "./Common";

const ViewContent = () =>{
    const {img,date,heading,desc,userProfile,userName} = Card[0]
    return(
        <>
        <div className="viewContainer lr-pad">
            <div className="viewInnerContainer">
                <div className="profile">
                    <div><img src={userProfile} alt="logo"/></div>
                    <div>
                        <p className="name text">{userName}</p>
                        <p className="postDate text">{date}</p>
                    </div>
                </div>
                <div className="userpost">
                    <h2 className="heading">{heading}</h2>
                    <p className="desc">{desc}</p>
                    <div className="postImg"><img src={img} alt="postImg"/></div>
                    <div className="postText">
                        <p className="text">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <p className="italic text">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                        <p className="text">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.<br></br><br></br>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                    </div>
                </div>
                <div className="imgGrid">
                    {Card.map((currElem,index)=>{
                        const {img} = currElem
                        return(
                            <>
                            <div className="gridimg" key={index}>
                                <img src={img} alt="img"/>
                            </div>
                            </>
                        )
                    })}
                </div>
                {/* share section */}
                <div className="share">
                    <p className="text">Share</p>
                    <div className="shareIcon">
                         <ion-icon name="logo-facebook"></ion-icon>
                         <ion-icon name="logo-twitter"></ion-icon>
                         <ion-icon name="logo-linkedin"></ion-icon>
                         <ion-icon name="logo-pinterest"></ion-icon>
                    </div>
                </div>
            </div>

            {/* related posts */}
            <div className="categoryContent">
                    <h1>Related posts</h1>
                <div className="cardContainer">
                    <Common/>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ViewContent