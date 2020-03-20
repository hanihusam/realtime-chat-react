import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import { Container } from "./messagePanel.style";

const MessagePanel = ({ messages, name }) => {
  return (
    <Container>
      <ScrollToBottom>
        {messages.map((message, idx) => (
          <div key={idx}>
            <Message message={message} name={name} />
          </div>
        ))}
      </ScrollToBottom>
    </Container>
  );
};

export default MessagePanel;
