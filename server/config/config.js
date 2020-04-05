require('dotenv').config()

const config = ({
    "host": process.env.DB_HOST,
    "user": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DATABASE,  
    "port": process.env.DB_PORT, 
    "connectionLimit":10,
    "waitForConnections": true,
    "queueLimit": 0
  

});



module.exports = config;