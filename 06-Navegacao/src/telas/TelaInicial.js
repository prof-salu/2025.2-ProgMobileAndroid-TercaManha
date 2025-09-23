// src/telas/TelaInicial.js
import {View, Text, Button, StyleSheet} from 'react-native';
export default function TelaInicial({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Tela Inicial</Text>
            <Button title='Ir para detalhes' 
                    onPress={() => navigation.navigate('Detalhes')}/>
            
            <Button title='Ir para configurações' 
                    onPress={() => navigation.navigate('Configurações')}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    }, texto: {
        fontSize: 20, marginBottom: 20,
    }
});