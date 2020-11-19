const sqlite3 = require('sqlite3');
const express = require("express");
var app = express();

const HTTP_PORT = 3000
app.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

const db = new sqlite3.Database('./bt_data.db', (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    } else {
        console.log("Database connected.");
           
    }
});

app.get("/data", (req, res, next) => {
  db.all("SELECT * FROM BTdata", [], (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.status(200).json({rows});
    });
});