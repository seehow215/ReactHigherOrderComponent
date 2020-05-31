import React, {Component} from 'react';
import Tabbar from "../components/tabbar";

class Car extends Component {
    render() {
        return (
            <div>
                <img className="bg" src={require('../static/images/car.PNG')} alt=""/>
            </div>
        );
    }
}

export default Tabbar(Car);