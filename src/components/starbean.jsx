import React, { Component } from 'react';
import './starbean.css';
import espresso from "../images/espresso.png";
 import mixie from "../images/filter-coffee.png";
class StarBean extends Component {
    state = {  } 
    render() { 
        return (
            <div className="starbeancon">

<h1 className="starbeantitle"> {this.props.value.starbean.title} </h1>

<div className="conbeancon">
<img src={espresso} className="starbeanimageleft" alt=""/>
<div className="conbean">
<h3 className="starbeansubleft"> {this.props.value.starbean.subtitle} </h3>

<h1 className="starbeandescleft"> {this.props.value.starbean.description} </h1>
</div>
</div>
<div className="conbeancon">
 <img src= {mixie}  className="starbeanimageright" alt=""/> 

<div className="conbean">
<h3 className="starbeansubright"> {this.props.value.starbean.subtitle1} </h3>

<h1 className="starbeandescright"> {this.props.value.starbean.description1} </h1>
</div>
</div>
</div>

        );
    }
}
 
export default StarBean;