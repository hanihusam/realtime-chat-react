import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { Container, OuterContainer } from "./chat.style";
import InfoBar from "../InfoBar/InfoBar";
import ChatInput from "../ChatInput/ChatInput";
import MessagePanel from "../MessagePanel/MessagePanel";
import TextContainer from "../TextContainer/TextContainer";

let socket;
let tmp = [];

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, error => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <OuterContainer>
      <Container>
        <InfoBar room={room} />
        <MessagePanel messages={messages} name={name} />
        <ChatInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </Container>
      <TextContainer users={users} />
    </OuterContainer>
  );
};

export default Chat;
