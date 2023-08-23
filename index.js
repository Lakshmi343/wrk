import React from 'react';
 import ReactDOM from 'react-dom/client';
 import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
 import Site  from './personalsite/Site';
// import Dom from './presat/Dom';
// import Rrr from './presat/Rrr';
//  import Home from './Search/Home';
//   import "./Search/style.css";
//  import Home1 from './Search1/Home1';
// import Home from './Search/Home';
// import Product from './Search/Product';







 const root= ReactDOM.createRoot(document.getElementById('root'));
 root.render(
  <React.StrictMode>
  {/* <Dom/> */}
        {/* <Rrr/> */}
       <BrowserRouter>
        <Site/>  
    
    {/* <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Product/:id' element={<Product/>}></Route>
    </Routes> */}

     </BrowserRouter>   
     {/* <Dom/> */}
      {/* <Home1/>   */}

  </React.StrictMode>
 );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
