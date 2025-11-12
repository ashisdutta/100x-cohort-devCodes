import { Client } from 'pg'
export const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
})

await client.connect();
console.log("✅ Connected to Postgres");