import { useState, useEffect, useMemo, useCallback, memo } from 'react'
import axios from "axios"

function App(){
  
const [count , setCount]= useState(0);

const Inputfunction = useCallback(()=>{
  console.log("Hi ahan");
},[count])
  return <div>
    <Component inputFunction={Inputfunction}></Component>
    <button onClick={()=>{
      setCount(count+1)
    }}>Clicked to change {count} </button>
  </div>
}

 const Component= memo(({inputfunction})=>{
  console.log("child render");
  return <div>
    <button>Clicked me</button>
  </div>
 })




export default App
