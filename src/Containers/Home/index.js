import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "../../assets/avatar.png";
import Arrow from "../../assets/arrow.png";
import axios from "axios";

import H1 from "../../components/Titles";

import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/button";

import { Container, Image, InputLabel, Input } from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: postUsers } = await axios.post(
      "http://localhost:3005/users",
      {
        name: inputName.current.value,
        age: inputAge.current.value,
      }
    );

    setUsers([...users, postUsers]);

    navigate("/usuarios");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}
export default App;
