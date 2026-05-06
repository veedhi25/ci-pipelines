const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Service1 API is working! keep going ");
});

app.listen(80, () => console.log("Service1 running on port 80"));
