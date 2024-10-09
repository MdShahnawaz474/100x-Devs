import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App(){
 const [ render , setRender] = useState(true);
  
 useEffect(()=>{
  setTimeout(()=>{
    setRender(false)
  },5000)
 },[])
  return (
    <div>
     {render ? <MainComponent/>: <h1>Hello beta ji</h1> }
    </div>
  )
}

// const MainComponent = ()=>{
//   const [count ,setCount] = useState(0)

//   const buttonCount = ()=>{
//     setCount(count+1)
//   }
//   return(<div>
//     <h1>{count}</h1>
//     <button onClick={buttonCount}>Add Count</button>
//   </div>
//   )
// }

function MainComponent (){
  useEffect(()=>{
    console.log("Component mounted");
    
    return()=>{
      console.log("Component unmount");
      
    }
  },[])


  return (
    <div>From inside my Component</div>
  )

  
}



export default App
