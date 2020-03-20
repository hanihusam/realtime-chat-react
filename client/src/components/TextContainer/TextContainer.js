import React from "react";
import { Container, ActiveContainer, ActiveItem } from "./textContainer.style";
import onlineIcon from "../Icon/onlineIcon.png";

const TextContainer = ({ users }) => (
  <Container>
    <div>
      <h1>Realtime Chat Application</h1>
      <h2>Build with Node, Exprees, and Socket.IO on backend.</h2>
      <h2>React, Styled Components, Socket.IO Client on frontend.</h2>
    </div>
    {users ? (
      <div>
        <h4>People currently chatting:</h4>
        <ActiveContainer>
          <h5>
            {users.map(({ name }) => (
              <ActiveItem key={name}>
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </ActiveItem>
            ))}
          </h5>
        </ActiveContainer>
      </div>
    ) : null}
  </Container>
);

export default TextContainer;
