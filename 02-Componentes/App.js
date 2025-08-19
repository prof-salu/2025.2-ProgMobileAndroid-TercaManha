import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, 
         SafeAreaView, Image, TextInput, Button } from 'react-native';


export default function App() {
  //comentario de linha

  /*comentario multi-linhas */
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo</Text>
      {/* Comentario no JSX */}
      <Image style={styles.logo} source={{uri : 'https://cdn-icons-png.freepik.com/256/6415/6415827.png?semt=ais_white_label'}} />
      <Image style={styles.logo} source={require('./assets/ESTACIO.jpg')} />

      <Text style={styles.subtitulo}>Faça o login para continuar</Text>

      <TextInput placeholder='Informe o seu e-mail' style={styles.entrada}/>

      {/*No componente Button não é possivel aplicar estilos*/}
      <Button title='Login' color={'red'} onPress={() => alert('Login')}/>

      <StatusBar style="auto" />
    </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //cor por hexadecimal
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  logo : {
    width : 80, 
    height: 80,
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  }, 
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
    marginBottom: 10,
  },
  subtitulo:{
    fontSize: 16,
    color: 'gray', //cor pelo nome da cor em ingles
    marginBottom: 20,
  }, entrada: {
    fontSize: 14,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'orange'
  }
});
