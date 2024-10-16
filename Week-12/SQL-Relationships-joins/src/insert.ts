import { Client } from "pg";

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
    
})

async function insertUserData (username:string,password:string,email:string){
    await client.connect();

    const result = await client.query(`INSERT INTO users
        (username, password, email)
        VALUES('${username}','${password}','${email}')`)

    console.log(result);
    
}

insertUserData(
    "user",
    "123",
    "mdShahnawaz@gmail.com"
);