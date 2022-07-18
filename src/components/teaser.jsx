import React, { Component } from 'react';
import './teaser.css';
import teaser from "../images/beanz-a.webp";
class Teaser extends Component {
    state = {  } 
    render() { 
        return (
            <div className="linkcontainer">
            <img className="linkimg" src={teaser}/>
            <div className="textlink2">
                <h1>{this.props.value.linkimage["jcr:title"]}</h1>
                <p className="linkpara">{this.props.value.linkimage["jcr:description"]}</p>
                <a href={this.props.value.linkimage.linkURL} target="blank">
                    <button className="linkbutton">Start Exploring</button>
                </a>
            </div>
        </div>






        );
    }
}
 
export default Teaser;