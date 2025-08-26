import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';

import CardTarefa from './src/componentes/CardTarefa';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.corpo}>
        <CardTarefa 
          titulo={'Prova de JS'} 
          descricao={'Estudar para a prova'}
          status={"Em andamento"}/>

        <CardTarefa 
          titulo={'Mercado'} 
          descricao={'Ir ao supermercado comprar carne.'}
          status={"Finalizado"}/>

        <CardTarefa 
          titulo={'Academia'} 
          descricao={'Matricula na academia'}
          status={"Pendente"}/>        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  }, corpo: {
    padding: 10,
  }
});