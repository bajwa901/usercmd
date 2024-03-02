require("dotenv").config();
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");

//Routes
var user = require("./src/apis/user");

var apiRoutes = express.Router();
apiRoutes.use(bodyParser.urlencoded({ extended: true }));
apiRoutes.use(bodyParser.json());
var app = express();
app.use(cors());
app.use(bodyParser.json()); //	to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    //	to support URL-encoded bodies
    extended: true,
  })
);

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `Server is running at http://localhost:${process.env.SERVER_PORT}`
  );
});

app.post("/login", user.simpleLogin);
app.post("/signup", user.simpleSignUp);
