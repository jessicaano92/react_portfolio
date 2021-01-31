import React, {Component} from 'react';
import Card from './CardUI';
import * as ReactBootstrap from "react-bootstrap";
import proj1 from '../../assets/proj1.png';
import proj2 from '../../assets/proj2.png';
import proj3 from '../../assets/proj3.png';
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

class Cards extends Component {
    
    render () {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">

                    {/* Meal Matcher card on project page */}
                    <div className="col-md-4">
                        <Card imgsrc={proj1} title="Meal Matcher" 
                  paragraph="This application is a front end 
                  application that allows users
                  to type in a favorite ingredient and view different recipes.
                  They even have the option to add recipes to their own personal
                  recipe book!"
                  />
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



                    {/* Couch Surfer card on project page */}
                    <div className="col-md-4">
                        <Card imgsrc={proj2} title="Couch Surfers" 
                  paragraph="This full stack application allows users to sign up, log in,
                  and blog about their favorite restaurants, cities, outdoor and
                  indoor activities!" />

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



            {/* Giftr Card on project page */}
                    <div className="col-md-4">
                        <Card imgsrc={proj3} title="Giftr" 
                  paragraph="This application was built using the MERN stack and allows
                  users to add gifts to their very own registry! Whether it is
                  for a birthday, wedding, or holiday, Giftr allows the user to
                  save links and images for any website or an affiliated one
                  provided on the site." 
                  
                  />
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
            </div>

        );
    }
}

export default Cards;