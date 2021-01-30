import React from "react";
import "./Biography.css";
import image from "../../src/assets/jessica.jpg";

export default function Biography() {
  return (
    <>
      <div className="container biography">
        <div className="row">
          <div className="col-12 col-md-6 aboutImgCont">
            <img
              className="bioImg img-fluid"
              src={image}
              alt="Jessica Anocibar"
            />
          </div>
          <div className="col-12 col-md-6 aboutText">
            <h3>Hello there! My name's Jessica Anocibar.</h3>
            <p>
              I am a Full Stack Web Developer with a background in travel and
              hospitality. I recently earned a certificate in Full Stack
              Development from the University of Denver, where I developed
              skills in JavaScript, Express, Node.js, MySQL, Sequelize, MongoDB,
              Mongoose, React.js, MERN stack, HTML, Handlebars, and CSS. An
              innovative problem solver passionate about developing apps, with a
              focus on functionality and design. My background in customer
              service and high expectations of customer satisfactory help me
              approach problems with creativity and teamwork. With each project,
              I aim to understand how to best engage users for an impactful user
              experience. I applied React.js in a recent project where I worked
              in a team of 5 to develop a MERN app that allows users to make
              registries to save gift ideas for friends and family to view and
              purchase. When I’m not developing or designing, I enjoy camping,
              biking, spending time with my family, or researching the latest
              trend on web development. I’m excited to leverage my skills in the
              future as part of a fast-paced, quality-driven team. Please feel
              free to reach out through my contact page! Let's connect.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
