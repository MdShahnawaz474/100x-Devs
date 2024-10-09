import { useState } from "react"
import { useRef } from "react"

export function Assignment2(){
const [count,setCount]= useState(0)

const numberOfTimeReRendered = useRef(0)

const handleReRender = ()=>{
    setCount (count + 1);
}

numberOfTimeReRendered.current = numberOfTimeReRendered.current +1 ;    
    
    
    
    return <div>
    <p>This component is renders{numberOfTimeReRendered.current} </p>
    <button onClick={handleReRender}>Force re render</button>
    </div>
}