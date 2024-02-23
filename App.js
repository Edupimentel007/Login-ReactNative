import React from 'react';
import { View, Text, TextInput, ImageBackground, Button, StyleSheet, Image } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://static.poder360.com.br/2022/11/pele-3.jpeg' }}
      style={styles.backgroundImage}>
      
      <View style={styles.container}>

        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Santos_Logo.png/768px-Santos_Logo.png' }} style={styles.logo} />
        
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu usuário"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
        />

        <Button title="Login" onPress={() => console.log("Botão de login pressionado")} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
    backgroundColor: 'white'
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
