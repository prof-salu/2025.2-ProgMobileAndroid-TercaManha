import { StyleSheet, Text, View, SafeAreaView, TextInput, 
         Button, FlatList} from 'react-native';

import { useState, useEffect } from 'react';

import Lembrete from './src/componentes/Lembrete';
import * as LembreteDAO from './src/dao/LembreteDAO';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [lembretes, setLembretes] = useState([]);

  useEffect(() => {
    async function carregarDadosArquivo(){
      const dados = await LembreteDAO.obterTodos();
      setLembretes(dados);
    }

    carregarDadosArquivo();
  }, []);

  async function salvarLembrete(){
    if(titulo.trim() === '' || conteudo.trim() === ''){
      return;
    }

    const novoLembrete = {
      id : Date.now().toString(),
      titulo : titulo,
      conteudo : conteudo,
      dataCriacao : Date.now(),      
    }

    let novaLista;
    novaLista = [...lembretes, novoLembrete];

    await gravarDadosNoArquivo(novaLista);
    setTitulo('');
    setConteudo('');
  }

  async function gravarDadosNoArquivo(novaLista){
    setLembretes(novaLista);
    await LembreteDAO.salvarTodos(novaLista);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meus Lembretes</Text>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Título' 
                   value={titulo} onChangeText={setTitulo}/>

        <TextInput style={styles.input} placeholder='Conteúdo' 
                   value={conteudo} onChangeText={setConteudo}/>
        <Button title='Gravar' onPress={salvarLembrete}/>
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
