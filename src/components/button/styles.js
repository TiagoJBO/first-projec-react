import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: ${props => props.isBack ? "transparent" : " #000000cc"};
  border-radius: 14px;
  border: ${props => props.isBack ? "1px solid #ffffff" : " none"};
  margin-top: 130px;
  font-style: normal;
  font-size: 17px;
  font-weight: bold;
  line-height: 28px;

  color: #ffffff;

  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
  img {
    transform: ${props => props.isBack ? 'rotatey(180deg)':''};
  }
`;
