const express = require("express");
require("dotenv").config();
const database = require("./config/database");
const cors = require("cors");
const routesApiVer1 = require("./api/v1/routes/Client/index.route");
const app = express();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

app.use(cors());

database.connect();

app.use(bodyParser.json());

app.use(cookieParser());
// Routes version 1
routesApiVer1(app);


app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
