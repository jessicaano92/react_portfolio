import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { BrowserRouter, Route } from "react-router-dom";
import Biography from "./pages/Biography";
import Projects from "./pages/Projects";
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div>
      
      <Home />
      {/* <Route exact path ="/" component={Home}/> */}
      <Route exact path ="/biography" component={Biography}/>
      <Route exact path ="/contact" component={Contact}/>
      <Route exact path ="/projects" component={Projects}/>
      
      
    
     
    </div>
    </BrowserRouter>
  );
}

export default App;
