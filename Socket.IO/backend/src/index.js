import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();

const server = createServer(app);

const io = new Server(server);

io.on("connection",(socket)=>{
    console.log(socket)
})

server.listen(process.env.PORT, () => {
  console.log("Server Connected at Port :-", process.env.PORT);
});
