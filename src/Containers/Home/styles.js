import styled from "styled-components";

import Background from "../../assets/bg image.png";

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


export const InputLabel = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.40799999237060547px;
  text-align: left;
  color: #eeeeee;
  margin-left: 25px;
`;
export const Input = styled.input`
  box-shadow: 0px 4px 4px 0px #00000040;
  background: #ffffff40;
  width: 342px;
  height: 58px;
  top: 193px;
  left: 36px;
  padding: 15px, 20px, 15px, 25px;
  border-radius: 14px;

  padding-left: 25px;

  border: none;
  outline: none;

  margin-bottom: 34px;

  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
`;
