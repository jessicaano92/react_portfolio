import React from "react";
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
             <h3>I am a Full Stack Web Developer with a background in customer service.  I recently earned a certificate in Full Stack Development from the University of Denver, where I developed skills in JavaScript, Express, Node.js, MySQL, Sequelize, MongoDB, Mongoose, React.js, MERN stack, HTML, Handlebars, and CSS. 

An innovative problem solver passionate about developing apps, with a focus on functionality and design. My background in customer service and high expectations of customer satisfactory help me approach problems with creativity and teamwork. 

With each project, I aim to understand how to best engage users for an impactful user experience. I applied React.js in a recent project where I worked in a team of 5 to develop a MERN app that allows users to make registries to save gift ideas for friends and family to view and purchase.

When I’m not developing or designing, I enjoy camping, biking, spending time with my family, or researching the latest trend on web development.

I’m excited to leverage my skills in the future as part of a fast-paced, quality-driven team. Please feel free to reach out through my contact page! Let's connect. </h3> 
    </Hero>
        
    <div className="links">
      <Button style={{width:170,backgroundColor:'#99C794', marginTop:20,}} variant="contained" color="primary" href="#contained-buttons" onClick={() => window.open('https://www.linkedin.com/in/jessica-anocibar-b9b129127/')}>
       LinkedIn
      </Button>
      <Button style={{width:170,backgroundColor:'#99C794', marginTop:20,}} variant="contained" color="primary" href="#contained-buttons" onClick={() => window.open('https://github.com/jessicaano92')}>
        GitHub
      </Button>
      <Button style={{width:170,backgroundColor:'#99C794', marginTop:20,}} variant="contained" color="primary" href="#contained-buttons" onClick={() => window.open('https://docs.google.com/document/d/1F6aipLgaDzNLwIJZgoIHJHdhiikNOkfGXKCeDfNn1CE/edit?usp=sharing')}>
        Resume
      </Button>
    </div>
    
    </div>
    </>
  );
}

