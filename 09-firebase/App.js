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
    const unsubscribe = LembreteDAO.ouvirLembretes(setLembretes);
    return () => unsubscribe();
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

      await LembreteDAO.editar(lembreteEditado.id, lembreteEditado);
                                                      
    }else{
      const novoLembrete = {
        titulo : titulo,
        conteudo : conteudo,
        dataCriacao : Date.now(),  
        finalizado : false,    
      }
      await LembreteDAO.adicionar(novoLembrete);        
    }

    setEditando(null);    
    setTitulo('');
    setConteudo('');
  }

  async function apagarLembrete(id){
    console.log('apagando');
    await LembreteDAO.apagar(id);
  }

  function editarLembrete(lembrete){
    setEditando(lembrete);
    setTitulo(lembrete.titulo);
    setConteudo(lembrete.conteudo);
  }

  async function finalizarLembrete(lembrete){
    const lembreteFinalizado = {
      ...lembrete,
      finalizado : !lembrete.finalizado,
    }

    await LembreteDAO.editar(lembreteFinalizado.id, lembreteFinalizado);
    
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
