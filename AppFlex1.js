import React from 'react';
import styled from 'styled-components/native';

const Quadrado = styled.View`
  background-color: ${props => props.cor};
  flex: ${props => props.flex};
  height:50px;
`;

const Pagina = styled.View`
  flex:1;
  flex-direction:column;
`;

function App() {
  return (
    <Pagina>
      <Quadrado flex={1} cor="red"></Quadrado>
      <Quadrado flex={2} cor="green"></Quadrado>
      <Quadrado flex={1} cor="blue"></Quadrado>
    </Pagina>
  );
}

export default App;