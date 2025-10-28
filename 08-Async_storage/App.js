import { StyleSheet, Text, View, SafeAreaView, TextInput, 
         Button, FlatList} from 'react-native';

import { useState, useEffect } from 'react';

import Lembrete from './src/componentes/Lembrete';
import * as LembreteDAO from './src/dao/LembreteDAO';

export default function App() {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [lembretes, setLembretes] = useState([]);
  //Armazena os dados que serao editados
  const [editando, setEditando] = useState(null);

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

    if(editando != null){
      const lembreteEditado = {
        ...editando,
        titulo : titulo,
        conteudo : conteudo
      }

      const novaLista = lembretes.map(item => (item.id === editando.id)
                                                  ? lembreteEditado : item);
      await gravarDadosNoArquivo(novaLista);                                                  
    }else{
      const novoLembrete = {
        id : Date.now().toString(),
        titulo : titulo,
        conteudo : conteudo,
        dataCriacao : Date.now(),  
        finalizado : false,    
      }
  
      let novaLista;
      novaLista = [...lembretes, novoLembrete];  
      await gravarDadosNoArquivo(novaLista);   
    }

    setEditando(null);    
    setTitulo('');
    setConteudo('');
  }

  async function apagarLembrete(id){
    //Gera uma nova lista sem o lembrete removido
    const novaLista = lembretes.filter(item => item.id !== id);
    gravarDadosNoArquivo(novaLista);
  }

  function editarLembrete(lembrete){
    setEditando(lembrete);
    setTitulo(lembrete.titulo);
    setConteudo(lembrete.conteudo);
  }

  async function gravarDadosNoArquivo(novaLista){
    setLembretes(novaLista);
    await LembreteDAO.salvarTodos(novaLista);
  }

  async function finalizarLembrete(lembrete){
    const lembreteFinalizado = {
      ...lembrete,
      finalizado : !lembrete.finalizado,
    }

    console.log(lembreteFinalizado);

    const novaLista = lembretes.map(item => (item.id === lembrete.id)
                                              ? lembreteFinalizado : item);
    gravarDadosNoArquivo(novaLista);

    if(editando && editando.id === lembrete.id){
      setEditando(null);
      setTitulo('');
      setConteudo('');
    }
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
          <Lembrete item={item} 
                    onApagar={apagarLembrete}
                    onEditar={editarLembrete}
                    onFinalizar={finalizarLembrete}/>
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
