import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Biography from "./pages/Biography";
import Projects from "./pages/Projects";



function App() {
  return (
    <Router>
    <div>
      
      <Home />
      <Route exact path ="/biography" component={Biography}/>
      <Route exact path ="/contact" component={Contact}/>
      <Route exact path ="/projects" component={Projects}/>
      
      
    
     
    </div>
    </Router>
  );
}

export default App;
