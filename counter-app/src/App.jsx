import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// State

// function App() {
//  const [todos, setTodos]=useState([{
//   title:"Go to gym",
//   description:"Go to gym from 7-9",
//   completed:true},
//   {
//     title:"study DSA",
//     description:"Study DSA from 9-10",
//     completed:false
//   }
// ]);
function App(){
const[todos , setTodos]=useState([
  {title:'Go to gym ',
  description:"At 5am-7am" 
},
  {
    title:"Go to College ",
    description:"At 8am"
  },
  {
    title:"Study Web dev",
    description:"At 2pm-8pm"
  }

])

  return (
    <div>
      {/* <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count+1} setCount={setCount}></CustomButton>
      <CustomButton count={count-1} setCount={setCount}></CustomButton>
      <CustomButton count={count*100} setCount={setCount}></CustomButton> */}
  <h1>Todo App using react</h1>

  {/* <Todos title={todos[0].title} description={todos[0].description
  }></Todos>  

  <Todos title={todos[1].title} description={todos[1].description
  }></Todos>  

  <Todos title={todos[2].title} description={todos[2].description
  }></Todos>   */}

{todos.map(function (todo){
  return <Todo title={todo.title} description={todo.description}></Todo>
})}
   
  </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


//function CustomButton(props){

//   function onclickHandler(){
//   props.setCount (props.count +1);
//   }

//   return <button onClick={onclickHandler}>Counter {props.count}</button>
// }

export default App
