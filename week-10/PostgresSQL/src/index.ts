
import { Client } from "pg";

const client = new Client({
    connectionString:"postgresql://neondb_owner:enD31NguOawh@ep-long-scene-a5o7424v.us-east-2.aws.neon.tech/neondb?sslmode=require"
});



async function createUserTable(){
    await client.connect();
    const result = await client.query(
    `CREATE TABLE users(
        id SERIAL PRIMARY KEY ,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) NOT NULL,
        create_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`
    )
    console.log(result);
    
}

createUserTable()