import React from 'react';
import './App.css';

import Student from "./Student"
import UseStudentState from './UseStudentState';
function App() {
  const h1=<h1>hello world</h1>;
const mystyle={
  color:'yellow',
  backgroundColor:'black'
}
  return (
    // <div style={{backgroundColor:'blue'}}>
    //   {h1}
    //   <div style={mystyle}>
    //     ABES ENGINEERING COLLEGE
    //   </div>
    //   <div>
    //     <><Student college="ABES ENGG COLLEGE" name="suresh" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
    //     <><Student college="ABES ENGG COLLEGE" name="suresh" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
    //     <><Student college="ABES ENGG COLLEGE" name="suresh" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
    //     <><Student college="ABES ENGG COLLEGE" name="suresh" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
    //     <><Student college="ABES ENGG COLLEGE" name="suresh" branch="cse" section="b" pic={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height="100px"></img>}/></>
    //   </div>
    // </div>

    <div>
      <div>
      <h2>hello using usestate hook</h2>
    </div>
    <div>
      <UseStudentState/>
    </div>
    </div>
      
  );
}
 
export default App;