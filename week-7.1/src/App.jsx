import { useState } from "react"

function App(){
  const [count,setCount]=useState(0);



  return (<div>
    <Count count={count}></Count>
    <Button count={count} setCount={setCount}></Button>
  </div>)
} 

function Count ({count}){
  return <div>
    {count}
  </div>
}

function Button({count,setCount}){
  return  <div>
    <button onClick={()=>{
      setCount(count + 1)
    }}>Increase</button>
  
    <button onClick={()=>{
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}
































// import { useState, lazy, Suspense } from 'react'
// import {BrowserRouter, Routes, Route, useNavigate, } from "react-router-dom"
// const Landing =  lazy(()=>import("./components/Landing"))
// const Dashboard = lazy(()=>import("./components/Dashboard"))
// import "./App.css"
// function App() {
//   return (<div>
//   <BrowserRouter>
//   <Appbar/>
//       <Routes>
//         <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense> }></Route>
//         <Route path="/" element={ <Suspense fallback={"loading..."}><Landing/></Suspense> }></Route>
//       </Routes>
//   </BrowserRouter>
//   </div>
//   )}

//   function Appbar(){
//     const navigate = useNavigate();
//    return <div>
//     <button className='btn' style={{}} onClick={()=>{
//       // window.location.href="/";
//       navigate("/")
//     }}>Landing</button>

//     <button className='btn' onClick={()=>{
//       // window.location.href="/dashboard";
//       navigate("/dashboard")
//     }}>Dashboard</button>
  
//   </div>
//   }

export default App
