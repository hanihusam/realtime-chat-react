import React from "react";
import { Form, Input, SendButton } from "./chatInput.style";

const ChatInput = ({ message, setMessage, sendMessage }) => (
  <Form onSubmit={sendMessage}>
    <Input
      type="text"
      placeholder="Type a message"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
    />
    <SendButton type="submit">Send</SendButton>
  </Form>
);

export default ChatInput;
