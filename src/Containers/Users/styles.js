import styled from "styled-components";
import Background from "../../assets/bg image1.png";

export const Container = styled.div`
  background: url("${Background}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 30px;
`;
export const ConteinerItens = styled.div`
  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );

  border-radius: 61px 61px 0px 0px;
  backdrop-filter: blur(45px);

  padding: 50px 36px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const H1 = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 34px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 0px;
  text-align: center;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;

  background: transparent;
  border-radius: 14px;
  border: 1px solid #ffffff;
  margin-top: 125px;

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
    transform: rotatey(180deg);
  }
`;

export const User = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  width: 342px;
  height: 58px;
  top: 193px;
  left: 36px;
  padding: 15px, 20px, 15px, 25px;
  border-radius: 14px;
  margin-top: 20px;

  padding-left: 25px;

  border: none;
  outline: none;

  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
