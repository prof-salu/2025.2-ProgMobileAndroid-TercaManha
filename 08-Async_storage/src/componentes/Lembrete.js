import {View, Text, StyleSheet, 
        Button, TouchableOpacity} from 'react-native';

export default function Lembrete({item}){
    return(
        <TouchableOpacity>
            <View style={styles.itemLista}>
                <View style={{flex: 1}}>
                    <Text style={styles.itemTitulo}>{item.titulo}</Text>
                    <Text style={styles.itemConteudo}>{item.conteudo}</Text>
                    <Text style={styles.itemData}>Criado em: {item.dataCriacao}</Text>
                </View>
            
                <View style={styles.botoes}>
                    <Button title='Finalizar' />
                    <TouchableOpacity style={styles.apagar}>
                        <Text style={styles.textoApagar}>X</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemLista: {
        padding: 15, borderBottomWidth: 1, borderBottomColor: '#ccc',
        backgroundColor: "#fff", marginBottom: 10, borderRadius: 5,
        flexDirection: 'row', alignItems: 'center',
    }, itemTitulo: {
        fontSize: 18, fontWeight: 'bold',
    }, itemConteudo: {
        fontSize: 12,
    }, itemData: {
        fontSize: 12, color: 'gray', marginTop: 5,
    }, botoes: {
        marginLeft: 10, gap: 10,
    }, apagar: {
        backgroundColor: '#ff5c5c', padding: 10, borderRadius: 50,
        justifyContent: 'center', alignItems: 'center',
        width: 40, height: 40
    }, textoApagar: {
        color: 'white', fontWeight: 'bold'
    }
})