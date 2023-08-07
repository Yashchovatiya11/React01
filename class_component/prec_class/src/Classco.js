import React from 'react'

class Classco extends React.Component {

     constructor() {
          super();
          
          console.log("cdmi")
          setTimeout(() => {
               console.log("hello 2");
          }, 3000);
     }
     
     getdata = () => {
          console.log("hello 1");
     }    

     render() {
          
          const { name, rno, car } = this.props;
          
          return (
               <div>
                    <h1>hello welcome........</h1>
                    <p>my name is {this.props.name}</p>
                    <p>my rno is {rno}</p>


                    <button onClick={this.getdata}>Click</button>
               </div>
          )
     }
}

export default Classco;