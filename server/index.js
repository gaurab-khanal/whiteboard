const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { captureRejectionSymbol } = require("events");

const app = express();
app.use(cors({
    origin: ["http://localhost:3000", "https://whiteboard-nine-xi.vercel.app/"]
}));
const httpServer = createServer(app);
const io = new Server(httpServer, { cors: ["http://localhost:3000", "https://whiteboard-nine-xi.vercel.app/"]});


io.on("connection", (socket) => {
  // ...
  console.log("Server connected")
  
  socket.on("join-room", (roomId)=>{
    console.log("Joining room", roomId)
    socket.join(roomId)
  })

  socket.on("beginPath", (data)=>{
    console.log("behin d: ", data)
    const roomId = data.roomId;
    delete data.roomId;
    console.log("beginPath: ", data)
    console.log("beginPath: ", roomId)
    socket.broadcast.to(roomId).emit("beginPath", data)
  })

  socket.on("drawLine", (data)=>{
    const roomId = data.roomId;
    delete data.roomId;
    socket.broadcast.to(roomId).emit("drawLine", data)
  })

  socket.on("changeConfig", (data)=>{
    const roomId = data.roomId;
    delete data.roomId;
    socket.broadcast.to(roomId).emit("changeConfig", data)
  })

  socket.on("drawHistory", (data)=>{
    const roomId = data.roomId;
    delete data.roomId;
    socket.broadcast.to(roomId).emit("drawHistory", data)
  })

});

httpServer.listen(4000);