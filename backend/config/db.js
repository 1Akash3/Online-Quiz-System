const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "akash1311",   // your logs showed empty password
  database: "quizdb"
});

function connectWithRetry() {
  db.connect((err) => {
    if (err) {
      console.log("Waiting for MySQL...");
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log("Connected to MySQL");
    }
  });
}

connectWithRetry();

module.exports = db;