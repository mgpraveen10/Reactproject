import React, { Component } from 'react';
import './titd.css';
class Titd extends Component {
    state = {  } 
    render() { 
        const coffeelowdown=[this.props.value.titd["multifield"]];
        var ob=[];
        Object.keys(coffeelowdown).map(function(item)
        {
            ob=coffeelowdown[item];

        }
        );


        return (

            
<div className="h">
<h1 className="i">{this.props.value.titd.heading} </h1>
<img  width="50%" src={this.props.value.titd.linkURL}/>


    <div className="candle" > 
            {Object.keys(ob).map((oneItem) => (
                 <div className="multi-des"> 
                     <h1> {ob[oneItem].title}</h1>
                     <p> {ob[oneItem].testdescription}</p>
                    </div>
            ))}
            </div>
</div>





        );
    }
}
 
export default Titd;