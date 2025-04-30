// import { io } from "socket.io-client";

// // Connect to the Socket.IO server
// const socket = io("http://localhost:5001");

// socket.on("connect", () => {
//   console.log(`Connected to server: ${socket.id}`);

//   // Join a chat room
//   socket.emit("joinChat", { senderId: "user1", recipientId: "user2" });

//   // Send a message
//   socket.emit("sendMessage", { senderId: "user1", recipientId: "user2", message: "Hello, User2!" });
// });

// // Listen for incoming messages
// socket.on("receiveMessage", (data) => {
//   console.log(`Message received from ${data.senderId}: ${data.message}`);
// });
