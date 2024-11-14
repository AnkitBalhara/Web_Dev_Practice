const express = require("express");

const app = express();
const http = require("http");
const path = require("path");
const server = http.createServer(app);

app.use(express.static(path.join(__dirname,"public")))
app.set("view engine","ejs")


const socketio = require("socket.io");
const io = socketio(server);

app.get("/", (req, res) => {
  res.send("Jai Shree Ram");
});

server.listen("3000", () => {
  console.log("Server Started");
});
