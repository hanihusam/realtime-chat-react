import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  padding: 5px;
  /* border-top: 2px solid #d3d3d3; */
`;

export const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 20px 0 0 20px;
  padding: 5%;
  width: 80%;
  font-size: 14px;
  &:focus,
  textarea:focus,
  select:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  cursor: pointer;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #0f4c81;
  padding: 20px;
  display: inline-block;
  /* border: none; */
  border-radius: 0 20px 20px 0;
  width: 20%;
  & > i {
    font-size: 24px;
  }
`;
