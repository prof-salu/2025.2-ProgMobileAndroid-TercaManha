// src/telas/TelaConfiguracoes.js
import {View, Text, StyleSheet} from 'react-native';
export default function TelaConfiguracoes(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Tela de Configurações</Text>
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