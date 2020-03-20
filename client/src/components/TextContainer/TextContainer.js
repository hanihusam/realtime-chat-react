import React from "react";
import { Container, ActiveContainer, ActiveItem } from "./textContainer.style";
import onlineIcon from "../Icon/onlineIcon.png";

const TextContainer = ({ users }) => (
  <Container>
    <div>
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Try it out right now!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>People currently chatting:</h1>
        <ActiveContainer>
          <h2>
            {users.map(({ name }) => (
              <ActiveItem key={name}>
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </ActiveItem>
            ))}
          </h2>
        </ActiveContainer>
      </div>
    ) : null}
  </Container>
);

export default TextContainer;
