import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

 function Dom() {
  return (
  <Router>
    <main>
      <nav>
        
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </main>
</Router>
  );
}

export default   Dom;