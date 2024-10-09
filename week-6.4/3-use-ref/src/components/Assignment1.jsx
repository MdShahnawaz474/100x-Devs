import { useRef } from "react"
import { useEffect } from "react"

 export function Assignment1(){
   const inputRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[inputRef])

    const handleButtoClick= ()=>{
        inputRef.current.focus()
    }
    return <div>
        <input ref={inputRef} type="text" placeholder="Enter the Text here" />
        <button onClick={handleButtoClick}>Focus</button>
    </div>
 }