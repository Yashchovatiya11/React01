import React, { Component } from 'react'
// import './Calculator.css';
import './App.css';

class Calculater extends Component {

     render() {

          let { result } = this.props;
          return (
               <div className="result">
                    <p>{result}</p>
               </div>

          )
     }
}

export default Calculater;

