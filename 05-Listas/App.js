import { StyleSheet, Text, View, SafeAreaView,
         TextInput, Button, FlatList } from 'react-native';

import { useState } from 'react';

export default function App() {

  const [lista, setLista] = useState([
    {id: 1, tarefa: 'Comprar pão'},
    {id: 2, tarefa: 'Prova de React Native'},
    {id: 3, tarefa: 'Ir a academia'},
  ]);

  const [tarefa, setTarefa] = useState('');

  function ItemLista({item, apagar}){
    return(
      <View style={styles.item}>
        <Text style={styles.textoItem}>{item.tarefa}</Text>
        <Button title='apagar' color='red' onPress={apagar}/>
      </View>
    );
  }

  function adicionaTarefa(){
    //Caso o campo esteja vazio, não faz nada.
    if(tarefa.trim() === ''){
      return;
    }

    const novaTarefa = {
      id : String(Date.now()),
      tarefa : tarefa
    };

    //Adiciona na lista
    setLista([...lista, novaTarefa]);
    setTarefa('');
  }


  function removeTarefa(idTarefa){
    const novaLista = lista.filter(item => item.id !== idTarefa);
    setLista(novaLista);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.entrada}>
        <TextInput 
          value={tarefa}
          onChangeText={setTarefa}
          style={styles.input} 
          placeholder='Nova tarefa...' />
        <Button 
          title='Adicionar' 
          color='purple'
          onPress={adicionaTarefa}/>
      </View>

      <FlatList 
        data={lista}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ItemLista item={item} apagar={() => removeTarefa(item.id)}/>
        )} />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, backgroundColor: '#fff', marginTop: 20,
  },entrada: {
    flexDirection: 'row', padding: 16, alignItems: 'center', borderBottomWidth: 1,
  }, input: {
    flex: 1, height: 40, borderWidth: 1, borderRadius: 10, paddingHorizontal: 10,
    marginRight: 10,
  }, item: {
    flexDirection: 'row', padding: 16, alignItems: 'center', 
  }, textoItem: {
    flex: 1, fontSize: 16,
  }
});
