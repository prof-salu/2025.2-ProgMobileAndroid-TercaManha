import { View, Text, Button, StyleSheet } from 'react-native';
import { auth } from '../../firebaseconfig';
import { signOut } from 'firebase/auth';

export default function Home({user}){

    function deslogar(){
        signOut(auth);
    }
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Área restrita</Text>

            <Text style={styles.texto}>
                Olá, {user.email}</Text>

            <Text style={styles.texto}>
                Você está logado no sistema.</Text>

            <Button title='Sair' color='orange' onPress={deslogar}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
    titulo: {fontSize: 26, fontWeight: 'bold', marginBottom: 10,},
    texto: {textAlign: 'center', color: '#444', marginBottom: 40,},
})