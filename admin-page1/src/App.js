import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Offcanvas } from 'bootstrap';
import Offcanv from './Component/Offcanv';
import { VscThreeBars } from "react-icons/vsc";
import Sideico from './Component/Sideico';

const options = [
  {
    name: <VscThreeBars></VscThreeBars>,
    scroll: true,
    backdrop: false,
  }
  
];
// import { useSelector, useDispatch } from 'react-redux'
// import { hello } from './app/Component/First';

function App() {

  // const count = useSelector((state) => state.conter.value)
  // const dispatch = useDispatch()

  return (
    <>

      {/* {options.map((props, idx) => (
        <Offcanv key={idx} {...props} />
      ))} */}

      <Sideico/>
    
    </>
  );
}

export default App;
