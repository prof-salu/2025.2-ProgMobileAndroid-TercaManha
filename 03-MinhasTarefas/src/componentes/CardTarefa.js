//caminho --> src/componentes/CardTarefa.js
import {View, Text, StyleSheet} from 'react-native';

export default function CardTarefa({titulo, descricao, status}){
    return(
        <View style={styles.card}>
              <View style={styles.secaoTexto}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text>
              </View>
        
              <View style={styles.secaoStatus}>
                <Text style={styles.textoStatus}>{status}</Text>
              </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: 'cyan',
      borderRadius: 8,
      padding: 15,
      marginBottom: 15,
      flexDirection: 'row'
    }, secaoTexto: {
        flex: 1,
    }, titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    }, descricao: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    }, secaoStatus: {
        paddingHorizontal: 10,
        borderRadius: 12,
        marginLeft: 10,        
        justifyContent: 'center'
    }, textoStatus: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 12,
        textTransform: 'uppercase',
    }
  });