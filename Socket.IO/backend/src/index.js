import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const app = express();

const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

io.on("connection", (socket) => {
  console.log("ID :-", socket.id);
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Jai SiyaRam" });
});

server.listen(process.env.PORT, () => {
  console.log("Server Connected at Port :-", process.env.PORT);
});
