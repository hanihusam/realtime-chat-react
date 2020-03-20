import styled from "styled-components";

export const MessageBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 14px;
  word-wrap: break-word;
  & img {
    vertical-align: middle;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;
`;

export const SentText = styled.p`
  display: flex;
  font-size: 14px;
  align-items: center;
  color: #828282;
  letter-spacing: 0.3px;
`;
