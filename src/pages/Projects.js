import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import {
  DiBootstrap,
  DiHeroku,
  DiJavascript1,
  DiMongodb,
  DiJqueryUiLogo,
  DiMysql,
  DiNodejsSmall,
  DiNpm,
  DiReact,
} from "react-icons/di";
import { Card } from "react-bootstrap";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import proj3 from "../../src/assets/proj3.png";
import proj2 from "../../src/assets/proj2.png";
import proj1 from "../../src/assets/proj1.png";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <h2 className="text-center">My Projects</h2>

      <div className="container-fluid">
        <div className="text-center">
          <h3 className="margin"> </h3>
          <br />
          <div className="row card-row">
            <div className="card-home col-sm-3">
              <img src={proj3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Giftr</h5>
                <p className="card-text">
                  This application was built using the MERN stack and allows
                  users to add gifts to their very own registry! Whether it is
                  for a birthday, wedding, or holiday, Giftr allows the user to
                  save links and images for any website or an affiliated one
                  provided on the site.
                </p>
                <ReactBootstrap.Card.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jessicaano92/registry"
                >
                  Repository{" "}
                </ReactBootstrap.Card.Link>
                <ReactBootstrap.Card.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://giftr-registry.herokuapp.com/"
                >
                  Demo
                </ReactBootstrap.Card.Link>
                <>
                  <br />
                  <DiReact className="techImg" />
                  <DiJavascript1 className="techImg" />
                  <DiBootstrap className="techImg" />
                  <DiHeroku className="techImg" />
                  <DiMongodb className="techImg" />
                  <DiNodejsSmall className="techImg" />
                  <DiNpm className="techImg" />
                </>
              </div>
            </div>

            <div className="card-home col-sm-3">
              <img src={proj2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Couch Surfers</h5>
                <p className="card-text">
                  This full stack application allows users to sign up, log in,
                  and blog about their favorite restaurants, cities, outdoor and
                  indoor activities!
                </p>
                <ReactBootstrap.Card.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jessicaano92/couchSurfers"
                >
                  Repository{" "}
                </ReactBootstrap.Card.Link>
                <ReactBootstrap.Card.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://dry-scrubland-38194.herokuapp.com/"
                >
                  Demo
                </ReactBootstrap.Card.Link>
                <>
                  <br />
                  <DiJavascript1 className="techImg" />
                  <DiBootstrap className="techImg" />
                  <DiHeroku className="techImg" />
                  <DiMysql className="techImg" />
                  <DiNodejsSmall className="techImg" />
                  <DiNpm className="techImg" />
                </>
              </div>
            </div>

            <div className="card-home col-sm-3">
              <img
                src={proj1}
                className="card-img-top mealMatchImg"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Meal Matcher</h5>
                <p className="card-text">
                  This application is a front end application that allows users
                  to type in a favorite ingredient and view different recipes.
                  They even have the option to add recipes to their own personal
                  recipe book!
                </p>
                <ReactBootstrap.Card.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/jessicaano92/meal_matcher_javascript_ajax"
                >
                  Repository{" "}
                </ReactBootstrap.Card.Link>
                <ReactBootstrap.Card.Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://jessicaano92.github.io/meal_matcher_javascript_ajax/"
                >
                  Demo
                </ReactBootstrap.Card.Link>
                <>
                  <br />
                  <DiJavascript1 className="techImg" />
                  <DiBootstrap className="techImg" />
                  <DiJqueryUiLogo className="techImg" />
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
