import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  JoinInnerCard,
  JoinInput,
  JoinCard,
  Heading,
  Title,
  SubTitle,
  Button
} from "./join.style";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Container>
      <Heading>
        <Title>Let's join us now!</Title>
        <SubTitle>
          A room where you can share your thought and get response.
        </SubTitle>
      </Heading>
      <JoinCard>
        <JoinInnerCard>
          <JoinInput
            placeholder="Your name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <JoinInput
            placeholder="Room's name"
            type="text"
            value={room}
            onChange={e => setRoom(e.target.value)}
            style={{ marginTop: "20px" }}
          />
          <Link
            to={`/chat?name=${name}&room=${room}`}
            onClick={e => (!name || !room ? e.preventDefault() : null)}
          >
            <Button
              disabled={!name || !room ? true : false}
              type="submit"
              style={{ marginTop: "20px" }}
            >
              Sign In
            </Button>
          </Link>
        </JoinInnerCard>
      </JoinCard>
    </Container>
  );
};

export default Join;
