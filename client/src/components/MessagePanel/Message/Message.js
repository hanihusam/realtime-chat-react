import React from "react";
import ReactEmoji from "react-emoji";
import {
  MessageContainer,
  SentText,
  MessageBox,
  MessageText
} from "./message.style";

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;

  const username = name.trim().toLowerCase();

  if (user === username) {
    isSentByCurrentUser = true;
  }
  return isSentByCurrentUser ? (
    <MessageContainer className="justifyEnd">
      <SentText className="pr-10">{username}</SentText>
      <MessageBox className="backgroundBlue">
        <MessageText className="colorWhite">
          {ReactEmoji.emojify(text)}
        </MessageText>
      </MessageBox>
    </MessageContainer>
  ) : (
    <MessageContainer className="justifyStart">
      <MessageBox className="backgroundLight">
        <MessageText className="colorDark">
          {ReactEmoji.emojify(text)}
        </MessageText>
      </MessageBox>
      <SentText className="pl-10">{user}</SentText>
    </MessageContainer>
  );
};

export default Message;
