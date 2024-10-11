const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())

module.exports = app;