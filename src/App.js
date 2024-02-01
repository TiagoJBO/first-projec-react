import React from 'react'
import Avatar from './assets/avatar.png';
import Arrow from './assets/arrow.png';

import { Container, Image, ConteinerItens, H1, InputLabel, Input, Button, } from "./styles";

const App = () => {


  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ConteinerItens>
        <H1>Olá!</H1>
        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>Cadastrar <img alt='seta' src={Arrow}></img></Button>
      </ConteinerItens>
    </Container >
  );

}
export default App