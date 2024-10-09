import { useState } from "react";

export  function CreateTodo (props){

    const [title, setTitle] = useState("");

    const [description, setDescrition]=useState("");
    return <div>
        <input id="title" style={{
            padding:10,
            margin:10
        }} type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
            // console.log(e.target.value);
        }}></input>
        <br/>
        <input style={{
            padding:10,
            margin:10
        }} type="text" placeholder="description"   onChange={function(e){
            const value = e.target.value;
            setDescrition(e.target.value);
            // console.log(e.target.value);
         
        }}></input>
        <br/>

        <button 
            style={{
                padding:10,
                margin:10
            }} onClick={()=>{
                fetch ("http://localhost:8000/todo", {
                    method: "POST" ,
                    body:JSON.stringify({
                        title: title,
                        description:description
                    }),
                    headers:{
                        "content-type": "application/json" 
                    }
                }).then(async function (res){
                    const json = await res.json();
                    alert("Todo added")
                })
            }}
      >Add a Todo</button>
    </div>
}


