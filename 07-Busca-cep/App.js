import {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Platform,
         ActivityIndicator, Alert, Button} from 'react-native';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);

  async function buscaCep(){
    if(cep.trim() == '' || cep.length < 8){
      if (Platform.OS == 'web'){
        alert('Por favor, digite um cep válido!');
      }else{
        Alert.alert('Erro!', 'Por favor, digite um cep válido!');
      }      
      return;
    }
    //A cada busca feita, devemos reiniciar os parâmetros
    setCarregando(true);
    setEndereco(null);
    setErro(null);

    try{
      const resposta = await fetch('https://viacep.com.br/ws/'+ cep + '/json');
      const data = await resposta.json();

      if(data.erro){
        setErro('Endereço não encontrado')
      }else{
        setEndereco(data);
        console.log(endereco);
      }
    }catch(error){
      setErro('Ocorreu um erro ao buscar o CEP');
      console.log(erro);
    }finally{
      setCarregando(false);
      setCep('');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Buscador de CEP</Text>
        <TextInput 
          style={styles.input}
          placeholder='Digite o CEP'
          value={cep}
          onChangeText={setCep}
          maxLength={8}
          keyboardType='numeric'/>

        <Text style={styles.textoAjuda}>Apenas números, sem traços ou pontos.</Text>

        <Button title='Buscar' onPress={buscaCep}/>

        {carregando && <ActivityIndicator 
                                          size={'large'} 
                                          color={'red'} 
                                          style={styles.carregando}/>}
        {erro && <Text style={styles.erro}>{erro}</Text>}

        {endereco && (
          <View>
            <Text>Logradouro: {endereco.logradouro}</Text>
            <Text>Bairro: {endereco.bairro}</Text>
            <Text>Cidade: {endereco.localidade}</Text>
            <Text>Estado: {endereco.uf}</Text>
            <Text>CEP: {endereco.cep}</Text>
          </View>
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',
  }, card: {
    backgroundColor:'white', padding: '20', borderRadius: 10, width: '90%',
  }, titulo: {
    fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20,
  }, input: {
    height: 45, borderColor: '#ccc', borderWidth: 1, borderRadius: 8, 
    paddingHorizontal: 10, marginBottom: 5,
  }, textoAjuda: {
    fontSize: 12, color: 'gray', textAlign: 'center', marginBottom: 20,
  }, carregando: {
    marginTop: 20,
  }, erro: {
    fontSize: 16, color: 'red', textAlign: 'center', marginTop: 15,
  }
});
