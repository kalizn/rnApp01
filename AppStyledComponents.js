import React from 'react'; // Importação da biblioteca "React"
import { StyleSheet, Text, View } from 'react-native'; // Importação dos componentes
import styled from 'styled-components/native';

// criando um componente de texto
const Texto1 = styled.Text`
  color: #FF0000;
  font-size: 30px;
  background-color: green;
`;
const Texto2 = styled.Text`
  color: #FFFF00;
  font-size: 30px;
  background-color: green;
`;

const Pagina = styled.View`
  flex:1;
  background-color: #0000FF;
`;

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
    <Pagina>
      <Texto1>Texto de exemplo</Texto1>
      <Texto2>Outro texto</Texto2>
    </Pagina>
  );
}

export default App;