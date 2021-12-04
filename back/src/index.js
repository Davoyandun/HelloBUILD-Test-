const express = require("express");
const app = express();
const morgan = require("morgan");
const { registration } = require("./controllers");
const Routes = require('./routes/index')
const cors = require('cors');

//settings
app.set("port", 3001);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


//server
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});


//routes
app.use('/hb',Routes)
