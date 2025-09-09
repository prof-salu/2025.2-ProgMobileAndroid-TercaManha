import { StyleSheet, Text, View, 
         TextInput, Button, SafeAreaView, Platform, Alert } from 'react-native';
//Biblioteca para manusear estados

import {useState} from 'react';

export default function App() {
  const [produto, setProduto] = useState('');
  const [quantidade, setQuantidade] = useState(1);

  function incrementar(){
    setQuantidade(quantidade + 1);
  }

  function decrementar(){
    if(quantidade === 0){
      return;
    }
    setQuantidade(quantidade - 1);
  }

  function adicionar(){
    //Verifica se a string está vazia
    if(produto.trim() == ''){
      if(Platform.OS == 'web'){
        alert('Digite o nome do produto');
      }else{
        Alert.alert('Erro!', 'Digite o nome do produto.');
      }
      return;
    }

    if(Platform.OS == 'web'){
      alert(`Produto adicionado: ${quantidade} X ${produto}`);
    }else{
      Alert.alert('Sucesso!', `Produto adicionado: ${quantidade} X ${produto}`);
    }    
    //alert('Produto adicionado: ' +  produto);

    //Resetar após a exibição
    setProduto('');
    setQuantidade(1);
  }

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.carrinho}>
        <Text style={styles.titulo}>Adicionar Produto</Text>

        <TextInput 
          style={styles.entrada} 
          placeholder='Ex: Carne'
          onChangeText={setProduto}
          value={produto}/>

        <Text style={styles.label}>Quantidade:</Text>

        <View style={styles.contador}>
          <Button title='-' onPress={decrementar}/>
          <Text style={styles.textoQuantidade}>{quantidade}</Text>
          <Button title='+' onPress={incrementar}/>
        </View>

        <View style={styles.botao}>
          <Button title='Adicionar' onPress={adicionar}/>
        </View>
     </View>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff',
    alignItems: 'center', justifyContent: 'center',
  }, carrinho: {
    borderRadius: 12, padding: 25,  width: '90%'
  }, titulo: {
    fontSize: 24, fontWeight: 'bold', textAlign: 'center',
    marginBottom: 20,
  }, label: {
    fontSize: 16, marginBottom: 5, color: '#333'
  }, entrada: {
    borderWidth: 1, borderRadius: 8, padding: 19, marginBottom: 10,
    fontSize: 16, 
  }, contador: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    marginBottom: 30,
  }, textoQuantidade: {
    fontSize: 24, fontWeight: 'bold', marginHorizontal: 10,
  }, botao: {
    marginTop: 10,
  }
});
