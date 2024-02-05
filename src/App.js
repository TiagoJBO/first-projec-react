import React, { useState, useRef } from "react";

import Avatar from "./assets/avatar.png";
import Arrow from "./assets/arrow.png";
import Trash from "./assets/trash.png";
import axios from "axios";

import {
  Container,
  Image,
  ConteinerItens,
  H1,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const data = await axios.post("http://localhost:3005/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(data)
    /*setUsers([
      ...users,
      {
        id: Math.random(),
        name: inputName.current.value,
        age: inputAge.current.value,
      },
    ]);*/
  }
  function deleteUser(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ConteinerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="lata-de-lixo" />
              </button>
            </User>
          ))}
        </ul>
      </ConteinerItens>
    </Container>
  );
};
export default App;
