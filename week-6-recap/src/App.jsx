import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4


function App(){

  const [todos , setTodos]= useState([{
    id:1,
    title: "Go to school",
    description:"At 7am"
  },
  {
    id:2,
    title: "Time to breakfast",
    description:"At 7:30Am"
  },
  {
    id: 3,
    title: "Time to go home back",
    description:"At 1 pm"

  }

  ])

  function AddTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description: Math.random()
    }])
  }

  return <>
  <button onClick={AddTodo}>Add a todo</button>
  {todos.map((todo)=>{return <Todo title={todo.title} description={todo.description} key={todo.id} id={todo.id}/>})}
  </>
}

function Todo({title, description, id}){
  return<div>
    
    <h2>{"id: " +id + ". "}{title}</h2>
    <h5>{description}</h5>
  </div>
}


export default App
