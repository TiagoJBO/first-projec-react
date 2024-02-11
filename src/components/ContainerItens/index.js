import React from "react";

import { ContainerItens  as Container } from "./styles";

function ContainerItens ({ children, isblur}) {
  
  return <Container isBlur={isblur}>{children}</Container>;
}
export default ContainerItens ;
