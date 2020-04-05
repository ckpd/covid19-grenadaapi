const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const report = require("./routes/report");
const API_PORT = 8099;

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(cors());
app.use("/api/",report)


// connection = await db.getConnection();
app.listen(API_PORT, ()=> console.log(`server up and running on port ${API_PORT}`));
