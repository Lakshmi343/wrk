import React from 'react'
import "./style.css"
import { Link, Outlet, Route, Routes } from "react-router-dom";



const Home = () => {
  return (
    <div className="header">
    <div className="container">
       
        <div className="header-text">
            
            <h1>Hi, I'm <span>Lakshmi</span></h1>
            <p>Mern Stack Developer</p>
            <h1>
          < Link to="Contact"><button>Contact <i className="uil uil-message icon"></i></button></Link>
          </h1>
        </div>
    </div>
</div>
  )
}

export default Home