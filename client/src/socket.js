import {io} from "socket.io-client";

const url = process.env.NODE_ENV === "development" ? "http://localhost:4000" : "https://whiteboard-7h91.onrender.com/";

export const socket = io(url);