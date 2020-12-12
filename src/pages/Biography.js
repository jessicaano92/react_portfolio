import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Hero from '../components/Hero';
import './Biography.css';




export default function Biography() {
  
  return (
      <>
    <div>
        
    <Hero>
             <h2 className="header2">Full Stack Web Developer</h2>
             <h4 className="header4">Phone Number: 541-891-6426</h4>
             <h4 className="header4">Email: j.anocibar92@gmail.com</h4>
             <h3>I am a Full Stack Web Developer that recently earned my certificate from the University of Denver's coding bootcamp! 
             I learned Javascript, CSS, HTML, React, Node.js, MongoDB, Mongoose, Sequelize, MySQL, and Express. Collaborating, communicating, and being task-oriented are key values I bring to any project. 
             Learning multiple programs and languages within such a short amount of time as prepared me for the ever-changing field of technology. </h3> 
    </Hero>
        
    
      <Button className="links" style={{width:170,backgroundColor:'#99C794', marginTop:20,}} variant="contained" color="primary" href="#contained-buttons" onClick={() => window.open('https://www.linkedin.com/in/jessica-anocibar-b9b129127/')}>
       LinkedIn
      </Button>
      <Button className="links" style={{width:170,backgroundColor:'#99C794', marginTop:20,}} variant="contained" color="primary" href="#contained-buttons" onClick={() => window.open('https://github.com/jessicaano92')}>
        GitHub
      </Button>
      <Button className="links" style={{width:170,backgroundColor:'#99C794', marginTop:20,}} variant="contained" color="primary" href="#contained-buttons" onClick={() => window.open('https://docs.google.com/document/d/1F6aipLgaDzNLwIJZgoIHJHdhiikNOkfGXKCeDfNn1CE/edit?usp=sharing')}>
        Resume
      </Button>
    
    </div>
    </>
  );
}

