import React, { Component } from 'react';
import './cardcomponent.css';
class Card extends Component {
    state = {  } 
    render() { 
         const cards=[this.props.value.cardcomponent["jcr:multifield"]];
         var element=[];
         Object.keys(cards).map(function(item){
            element=cards[item];
         });


         



        return (
            <div class="con">
            {Object.keys(element).map((oneItem) => (
            <a href={element[oneItem].linkURL} target="blank">
            <div class="card">
            
            <img src={element[oneItem].logolink} width="150px" height="150px"/>
            <h1 >{element[oneItem].title}</h1>
            <h2 >{element[oneItem].subtitle}</h2>
            </div>  </a>
            ))}
            </div>
            

        );
    }
}
 
export default Card;