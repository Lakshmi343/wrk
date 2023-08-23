import React from 'react'
import "./style.css"
import { Link, Outlet, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import { Container } from 'react-bootstrap';

const About = () => {
  return (
      <div>

<div className='About'>
  <div className='name'><h1><span>
    About me</span></h1>
    <h4>My indroduction</h4>
    
    </div>
    </div>
   
   <div className='ab_data'>
   <div className='img'>
   <Image
        src="./so o1.jpg"
        roundedCircle/>
    </div>
   <div className='ab_details'>
     <Container>
   <p>Hey there, <span>I'm Lakshmi.k, </span>a dedicated MERN stack developer. With a love for all things coding, I specialize in crafting modern web applications using MongoDB, Express.js, React, and Node.js.
My journey started  6 months ago, and I've been hooked ever since. From conceptualizing user-friendly interfaces to designing powerful fred-end systems, I thrive on turning ideas into functional, efficient, and visually appealing applications.
What excites me most is the ever-changing tech landscape. I'm committed to staying at the forefront of industry trends, ensuring that my projects are not only functional but also optimized for performance and security.</p>
   </Container>  
   {/* <h1>
          < Link to="More"><button>Morethen<i className="uil uil-airplay mores"></i></button></Link>  
           < Link to="Download CV"><button>"Download CV<i className="uil uil-file-info-alt mores"></i></button></Link>
          </h1> */}
    </div> 
   

   

   </div>
   
   
   </div>


    
  )
}

export default About