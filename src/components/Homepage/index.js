import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
  

  return (
      <>
    <div className={classes.root}>
      <h1 className="header">Jessica Anocibar</h1>
        <h3 className="header2">Full Stack Web Developer</h3>
        <h4>Phone Number: 541-891-6426</h4>
        <h4>Email: j.anocibar92@gmail.com</h4>
        <h4>I will complete the Full Stack Coding Bootcamp from University of Denver in just a few short weeks. I have come a long way from not knowing much about web development to building an enormous amount of knowledge within a 3 month time period. These new skills include Javascript, CSS, HTML, React, Node.js, MongoDB, Mongoose, Sequelize, and many other languages. Collaborating, communicating, and being task-oriented are key values I bring to any project. Learning multiple programs and languages within such a short amount of time as prepared me for the ever-changing field of technology. </h4> 

    
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
    </>
  );
}

