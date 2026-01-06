import mysql, { createPool } from "mysql2/promise"

const pool = mysql.createPool({
    host : "localhost",
    user : "root",
    password: "Habib2006",
    database: "social_app"
})

export default pool;

