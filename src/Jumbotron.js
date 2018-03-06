import React, {Component} from 'react'
import findBMR from './findBMR';
import handleFindBMR from './App';

export default class Jumbotron extends Component{

 render(){
   return (
     <div className="jumbotron-fluid">
       <div className="container">
         <h1 className="display-3">{this.props.calculation} calories</h1>
         <p class="lead">is what you need to maintain your current weight.</p>
         <hr className="my-4"></hr>
         <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
         <p className="lead">
           <a className="btn btn-primary btn-lg" href="#" role="button">Tell me about my calculation</a>
         </p>
       </div>
     </div>
   )
 }
}
