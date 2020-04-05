const express = require("express");
const db = require('../config/createPoolConnection');
let conn = null;


const reports = express.Router();
  

reports.get("/", async (req, res)=>{
    const sql = ` CALL getReport();`;

    try{
        let conn = await db.getConnection();
        const [rows] = await conn.execute(sql);
         return res.status(200).json({data: rows})
    }catch(err){
        conn && conn.release();
    }
});


module.exports = reports;