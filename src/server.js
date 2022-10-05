import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
// import connection from './configs/connectDB';

require("dotenv").config();

var morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8080;

app.use((req, res, next) => {
  //check quyền
  console.log("-----------------------");
  console.log(req.method);
  next();
});

app.use(morgan("combined"));

app.use((req, res, next) => {
  //check quyền
  console.log("-----------------------");
  console.log(req.method);
  next();
});

app.use(express.urlencoded({ extended: true })); //hổ trợ data từ client -> server
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
  return res.render("404.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
