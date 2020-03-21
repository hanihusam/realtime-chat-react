const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const morgan = require("morgan");
const path = require("path");
const {
  addUser,
  removeUser,
  getUser,
  getUserInRoom
} = require("./controller/users");

const PORT = process.env.PORT || 5000;
const router = require("./router/router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

io.on("connect", socket => {
  // When a user joined the room
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.join(user.room);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUserInRoom(user.room)
    });
    callback();
  });

  // When a user sends message to the room
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  // When a user left the room
  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUserInRoom(user.room)
      });
    }
  });
});

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

app.use(router);

server.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
