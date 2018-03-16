import React, {Component} from 'react'

export default class Jumbotron extends Component{

 render(){
   return (
     <div className="jumbotron-fluid">
       <div className="container">
         <h1 className="display-3">{this.props.calculation} calories</h1>
         <p class="lead">is what you need to maintain your current weight.</p>
         <hr className="my-4"></hr>
         <p class="lead">This calculator is based on proven scientific formulas, tailored to you.</p>
         <br/>
         <p class="lead">Use this number to track your goals using your favorite apps.</p>
         <br/>
         <p className="lead">
           <a className="btn btn-primary btn-lg" href="/learnmore" role="button">Tell me about my calculation <br/><span class='subText'>What forumlas were used?</span></a>
         </p>
       </div>
     </div>
   )
 }
}
