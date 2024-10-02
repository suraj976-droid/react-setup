const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sit",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/", (req, res) => {
  return res.json("this is from backned");
});

app.listen("8081", () => {
  console.log("port : 8081");
});

app.get("/getdata", (req, res) => {

    const sql = "SELECT * FROM admission_master";

    db.query(sql , (err,data) =>{
        if(err){
            return res.json(err);
        }else{
            return res.json(data);
        }
    })
});
