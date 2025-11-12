import { client } from "./db.js";


async function  insertUser(username: string, email:string, password:string) {
    const result = await client.query(`
            INSERT INTO users(username, password, email)
            VALUES ($1, $2, $3)
        `, [username, email, password])
        console.log(result)
}
insertUser("user114", "useree44@gmail", "edf12sds3v4vv");
