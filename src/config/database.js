const { Pool } = require ('pg')
const dotenv = require('dotenv')

dotenv.config()

const pool = new Pool ({
    connectionString: process.env.DB_URL
})

pool.on('connect', () => {
    console.log('Database Connected')
})

module.exports = {
    query: (text, params) => pool.query(text, params)
}