import React, { useState } from 'react'

export default function Counter() {


    const [state,setstate]=useState(0)

    const buttonstyle = {

      backgroundColor:'#333',
      color:'white',
      margin:'5px'
    }
    function Inc(){
        setstate(state+1);
       

      
    }
    function Dec(){
      setstate(state-1);
    }
    function Res(){
      setstate(0)
    }

    
  return (
    
<>

<div className='counter'>Counter is {state}</div>
<button style={buttonstyle} onClick={Inc}>incres</button>
<button style={buttonstyle}  onClick={Res}>Reset</button>
<button style={buttonstyle}  onClick={Dec}>Decres</button>






</>
  )
}
