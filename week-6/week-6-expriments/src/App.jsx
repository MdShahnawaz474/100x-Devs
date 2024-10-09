import { useEffect, useState } from 'react';
import './App.css';

function App(){
const [todos, setTodos]=useState([])



useEffect(() => {
  fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res) => {
      const json = await res.json();
      setTodos(json.todos);
    })
}, [])


return(
  <div>
    {todos.map(({title,description})=><Todo title={title} description={description}/>)}
  </div>
)


}

function Todo({title, description}){
  return <div>
    <h1>{title}</h1>
    <h5>{description}</h5>
  </div>
}










// function App(){

//   return <div>
//     <CardWrapper>
//        <TextComponent/>
//   </CardWrapper>
//     <CardWrapper>
//     hi hello  
//   </CardWrapper>
//     </div>
  
// }

// function CardWrapper({children}){
// return <div style={{border:'2px solid black',padding:20}}>
//     {children}
//   </div>
// }










// function TextComponent(){
//   return <div>
//     hi there this is a text component
//   </div>
// }





























// function App() {
//   const [todos, setTodos] = useState([
//     { id: 1, title: "Go to gym", description: "Go to gym today" },
//     { id: 2, title: "Go to office", description: "Go to office today" },
//     { id: 3, title: "Go to home", description: "Go to home today" }
//   ]);

//   function addTodo() {
//     setTodos([...todos, {
//       id: todos.length + 1, // Generate a new id
//       title: Math.random(),
//       description: Math.random()
//     }]);
//   }

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//      {todos.map(function(todo){
//       return <NewTodo title={todo.title} 
//       description={todo.description} key={todo.id} id={todo.id}></NewTodo>
//      })}
//     </div>
//   );
// }

// function NewTodo ({id,title,description}){
//   return <div>
//     <span>{id}</span>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

 export default App;
