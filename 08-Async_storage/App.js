import { StyleSheet, Text, View, SafeAreaView, TextInput, 
         Button, FlatList} from 'react-native';
import { useState } from 'react';

import Lembrete from './src/componentes/Lembrete';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [lembretes, setLembretes] = useState([
    {
      id : 1, 
      titulo: 'Simulado 01', 
      conteudo : 'Estudar para o simulado 01',
      dataCriacao : new Date().toLocaleDateString('pt-BR'),
      finalizado : true,
    },
    {
      id : 2, 
      titulo: 'Simulado 02', 
      conteudo : 'Estudar para o simulado 02',
      dataCriacao : new Date().toLocaleDateString('pt-BR'),
      finalizado : false,
    },
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meus Lembretes</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Título' 
                   value={titulo} onChangeText={setTitulo}/>

        <TextInput style={styles.input} placeholder='Conteúdo' 
                   value={conteudo} onChangeText={setConteudo}/>
        <Button title='Gravar' />
      </View>

      <FlatList 
        data={lembretes}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Lembrete item={item} />
        )}
      />


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', marginHorizontal: 20, 
    paddingTop: 40,
  }, titulo: {
    fontSize: 24, fontWeight: 'bold', textAlign: 'center', 
    marginBottom: 20,
  }, inputContainer:{
    marginBottom: 20, gap: 5, 
  }, input: {
    height: 40, borderColor: '#ccc', borderWidth: 1,
    borderRadius: 5, paddingHorizontal: 10,
  }
});
