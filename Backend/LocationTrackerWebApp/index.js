const express = require("express");
const app = express();
const path = require("path");
const http = require("http");

const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
//   console.log("connected");

  socket.on("send-location", (data) => {
    io.emit("recieve-location", { id: socket.id, ...data });
  });
  socket.on("disconnected", () => {
    io.emit("user-disconnected", socket.id);
  });
});

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("Server Stared");
});
