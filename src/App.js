import React from 'react'
import Avatar from './assets/avatar.png';
import Arrow from './assets/arrow.png';
import Trash from './assets/trash.png'

import { Container, Image, ConteinerItens, H1, InputLabel, Input, Button, User, } from "./styles";

const App = () => {
  const users = [
    { id: Math.random(), name: "Tiago", age: 40, },
    { id: Math.random(), name: "Joana", age: 7, }
  ];


  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ConteinerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>
          Cadastrar <img alt='seta' src={Arrow} />
        </Button>

        <ul>

          {users.map((user) => (

            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button><img src={Trash} alt='lata-de-lixo' /></button>
            </User>
          ))}



        </ul>
      </ConteinerItens>
    </Container >
  );

}
export default App