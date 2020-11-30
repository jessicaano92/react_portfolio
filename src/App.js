import React from "react";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import './App.css';





function App() {
  return (
    <div>
      <Homepage />
      
        <Portfolio />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
