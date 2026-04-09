const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

function connectWithRetry() {
  const db = mysql.createConnection({
    host: "database",
    user: "root",
    password: "akash1311",
    database: "quizdb"
  });

  db.connect((err) => {
    if (err) {
      console.log("Waiting for MySQL...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Connected to MySQL");

      app.get("/", (req, res) => {
        res.send("Backend is running successfully");
      });

    }
  });
}

connectWithRetry();