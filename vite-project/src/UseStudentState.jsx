import React, { useState } from 'react'

function UseStudentState() {
    const[count,setcount]=useState(20);

  return (
    <div style={{color:'red', border:'2px solid red', width:'400px', height:'400px', marginLeft:'500px', backgroundColor:'rgb(120,200,100)',fontSize:'50px',paddingLeft:'150px',paddingRight:'200px'}}>{count }</div>
  )
}

export default UseStudentState