import React from "react";
import {
  ChatPanel,
  LeftInnerContainer,
  RightInnerContainer
} from "./infoBar.style";
import OnlineIcon from "../Icon/onlineIcon.png";
import CloseIcon from "../Icon/closeIcon.png";

const InfoBar = ({ room }) => (
  <ChatPanel>
    <LeftInnerContainer>
      <img src={OnlineIcon} alt="Online icon" style={{ marginRight: "5%" }} />
      <h3>{room}</h3>
    </LeftInnerContainer>
    <RightInnerContainer>
      <a href="/">
        <img src={CloseIcon} alt="Close Icon" />
      </a>
    </RightInnerContainer>
  </ChatPanel>
);

export default InfoBar;
