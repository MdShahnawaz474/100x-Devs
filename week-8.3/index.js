// function main(){
// fetch("https://sum-server.100xdevs.com/todos")
// .then( async response =>{
//     const json = await response.json()
//     console.log(json.todos.length);

// }
// )}
// main()

const axios = require("axios")

// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await response.json()
//     console.log(json.todos);
    
// }

async function main(){
    const response= await axios.get("https://httpdump.app/dumps/413f2b83-a5e5-4ddd-aa2c-3780415edd0b",{
        header:{
           
                Authorization:"Bearer 1234"
            
        }
    })
    //data.lenght
    console.log(response.data);
    
}
main()