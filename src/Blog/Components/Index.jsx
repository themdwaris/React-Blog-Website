import React from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from './Navbar'
import Home from "./Home";
import '../Style/Style.css';
import Category from "./Category";
import Footer from "./Footer";
import ViewContent from "./readingContent";
import Travel from "./Travel";
import Food from "./Food";
import Business from "./Business";
import Technology from "./Tech";


const Index = () =>{
    return(
        <>
            <div>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/category" element={<Category/>} />
                    <Route exact path="/viewpage" element={<ViewContent/>} />
                    <Route exact path="/travel" element={<Travel/>} />
                    <Route exact path="/food" element={<Food/>} />
                    <Route exact path="/tech" element={<Technology/>} />
                    <Route exact path="/business" element={<Business/>} />
                </Routes>
                <Footer/>
            </div>
        </>
    )
}
export default Index