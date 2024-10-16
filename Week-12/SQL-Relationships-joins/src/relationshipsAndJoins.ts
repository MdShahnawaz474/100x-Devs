import { Client } from "pg";

const client = new Client({
     connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
});

// CREATE TABLE adresses(
//     id SERIAL PRIMARY ,
//     user_id INTEGER NOT NULL,
//     city VARCHAR(100) NOT NULL,
//     country VARCHAR(100) NOT NULL,
//     Street VARCHAR(255) NOT NULL,
//     PINCODE VARCHAR(20) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
//     FOREIGN KEY (user_id) REFERENCE users(id) ON DELETE CASCADE
// );