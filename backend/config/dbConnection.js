import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

//loading env variables
dotenv.config()

export const connectionPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
})
