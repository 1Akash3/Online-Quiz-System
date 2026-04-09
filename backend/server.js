const express = require("express");
const cors = require("cors");
const routes = require("./routes/quizRoutes");
require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Quiz Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});