
const mysql = require("mysql2/promise");
const db = require('./config')

const connectionPool = mysql.createPool(db);

module.exports = {
    async getConnection(){
        try {
            const connection = await connectionPool.getConnection();
            return connection;
        } catch (error) {
            throw error;
        }
    }
}

