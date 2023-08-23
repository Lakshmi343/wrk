import React from 'react'
import Home from './Home'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import "./style.css"
import { Link, Outlet, Route, Routes } from "react-router-dom";
import More from './More';


 const Site = () => {
  return (

    <div style={{display:"flex"}}>
      <div className='sitebtn'>
      
        
          <h1>
          <Link to="/"> <button>Home</button></Link>
          </h1>
           <h1>
          < Link to="about"><button>About</button></Link>
          </h1> 
          <h1>
          <Link to="services"><button> Services</button></Link>
          </h1>
          <h1>
          <Link to="contact"><button> Contact</button></Link>
          </h1>
        </div>

        <div>
          <Outlet />
        </div>


      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="about" element={<About />} /> 
      
        <Route path="services" element={<Services />}/>
        <Route path="cv" element={<More/>} /> 
        <Route path="contact" element={<Contact />} />
    
      </Routes>
    </div>
  
    
  )
}
export default Site;