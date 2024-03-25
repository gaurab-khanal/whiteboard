const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors({
    origin: "http://localhost:3000",
}));
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: ["http://localhost:3000", "https://whiteboard-nine-xi.vercel.app/"]});


io.on("connection", (socket) => {
  // ...
  console.log("Server connected")
 

  socket.on("beginPath", (data)=>{
    socket.broadcast.emit("beginPath", data)
  })

  socket.on("drawLine", (data)=>{
    socket.broadcast.emit("drawLine", data)
  })

  socket.on("changeConfig", (data)=>{
    socket.broadcast.emit("changeConfig", data)
  })


});

httpServer.listen(4000);