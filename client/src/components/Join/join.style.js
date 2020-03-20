import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const JoinCard = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  max-width: 100%;
  min-height: 300px;
  @media (max-width: 769px) {
    & {
      height: 100%;
    }
  }
`;

export const JoinInnerCard = styled.div`
  width: 90%;
`;

export const JoinInput = styled.input`
  border-radius: 0;
  padding: 15px 20px;
  width: 100%;
`;

export const Heading = styled.div`
  color: white;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 70px;
`;

export const Title = styled.h2`
  font-weight: 700;
`;

export const SubTitle = styled.h4`
  font-weight: 500;
`;

export const Button = styled.button`
  cursor: pointer;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
  border: none;
  width: 50%;
  transition: 0.5s;
  &:focus {
    outline: 0;
  }
  &:hover {
    background: #2999ff;
  }
  &:disabled,
  &[disabled] {
    background-color: #cccccc;
    color: #666666;
  }
`;
