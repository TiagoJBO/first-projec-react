import React, { useState, useEffect } from "react";

import Avatar from "../../assets/avatar2.png";
import Arrow from "../../assets/arrow.png";
import Trash from "../../assets/trash.png";
import axios from "axios";
import ContainerItens from "../../components/ContainerItens";
import H1 from "../../components/Titles";
import Button from "../../components/button";

import { Container, Image, User } from "./styles";
import { useNavigate } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchuser() {
      const { data: getUser } = await axios.get("http://localhost:3005/users");

      setUsers(getUser);
    }
    fetchuser();
  }, []);

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3005/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }
  function goBackPage() {
    navigate("/");
  }

  return (
    <Container>
      <Image alt="logo-image" src={Avatar} />
      <ContainerItens isBlur={true}>
        <H1>Usuarios</H1>

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

        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow} />
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}
export default Users;
