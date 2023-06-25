import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Courses from "./Courses";
import Login from "./Login";
import "../styles.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/courses" element = {<Courses/>}/>
                <Route path = "/login" element = {<Login/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
export default App;