const express = require("express");
const app = express();
const morgan = require("morgan");

//settings
app.set("port", 3001);

app.use(morgan("dev"));
app.use(express.json());

//server
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});


//routes

