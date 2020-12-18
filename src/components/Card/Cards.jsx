import React, {Component} from 'react';
import Card from './CardUI';
import proj1 from '../../assets/proj1.png';
import proj2 from '../../assets/proj2.png';
import proj3 from '../../assets/proj3.png';

class Cards extends Component {
    
    render () {
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={proj1} title="Meal Matcher"/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={proj2} title="Couch Surfers" />
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={proj3} title="Giftr" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Cards;