// Creating connection to db

const mysql = require('mysql')

// Initializing connection variable
let connection


// Creates connection based on Heroku database connection
if(process.env.JAWS_DB){
    connection = mysql.createConnection(process.env.JAWS_DB)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'burgers_db'
    })
}

// Exports connection
module.exports = connection