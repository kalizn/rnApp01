import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <View style={estilo.pagina}>
      <Text style={estilo.texto}>Olá Mundo!</Text>
      <Text style={estilo.texto}>Segundo Olá Mundo!</Text>
      <Text style={[estilo.texto, {fontSize:10}]}>Terceiro Olá Mundo!</Text>
    </View>
  );
}

// criando a constante estilo
// que vai receber um objeto Stylesheet
// objeto pagina - contém todos os estilos usados
const estilo = StyleSheet.create({
  pagina: {
    width: 250,
    height: 200,
    backgroundColor: '#ff0000'
  },

  texto: {
    color: '#ffffff',
    fontSize: 25
  }

});

export default App;