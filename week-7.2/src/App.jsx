import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CountContext} from "./context"
import { RecoilRoot, atom, useRecoilState, useRecoilValue,useSetRecoilState  } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'


function App(){
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}
function Count (){
  console.log("Count reRedner");
  return <div> 
    <CountRenderer/>
  <Buttons />
  <EvenSelector/>
  </div>
}

function EvenSelector(){
const isEven=useRecoilValue(evenSelector); 
 return <div>
   {isEven ? "it is even number": "it is odd"}
  </div>
}
function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return <div>
      <b>
        {count}
      </b>
  </div>
}
function Buttons(){
  // const [count,setCount]= useRecoilState(countAtom)

  const setCount = useSetRecoilState(countAtom)
console.log("buttons re rendering");
  return <div>
    <button onClick={()=>{
      setCount (count => count +1 )
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count =>  count-1);
    }}>Decrease
    </button>
  </div>

 
}
export default App
