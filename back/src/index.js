const express = require("express");
const app = express();
const morgan = require("morgan");
const { registration } = require("./controllers");
const Routes = require('./routes/index')

//settings
app.set("port", 3001);

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
//server
app.listen(app.get("port"), () => {
  console.log("Server on port " + app.get("port"));
});


//routes
app.use('/hb',Routes)
