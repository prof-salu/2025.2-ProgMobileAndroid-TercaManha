import { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet,
        Alert, Platform } from 'react-native';

import {auth} from '../../firebaseconfig';
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword } from 'firebase/auth';

export default function Autenticacao(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [ehCadastro, setEhCadastro] = useState(false);
    const [carregando, setCarregando] = useState(false);

    async function autenticar(){
        if(!email || !senha){
            if(Platform.OS === 'web'){
                alert('Todos os campos devem ser preenchidos');
            }else{
                Alert.alert('Error!', 'Todos os campos devem ser preenchidos.');
            }
        }

        setCarregando(true);

        try{
            if(ehCadastro){
                //Cadastro de novo usuario
                await createUserWithEmailAndPassword(auth, email, senha);
                if(Platform.OS === 'web'){
                    alert('Usuário criado com sucesso');
                }else{
                    Alert.alert('Sucesso!', 'Usuário criado com sucesso');
                }
            }else{
                //Login de usuario
                await signInWithEmailAndPassword(auth, email, senha);
            }
        }catch(error){
            if(Platform.OS === 'web'){
                    alert('Ocorreu um erro!');
                }else{
                    Alert.alert('Error!', 'Ocorreu um erro');
                }
        }finally{
            setCarregando(false);
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>
                {ehCadastro ? 'Criar Conta' : 'Bem-vindo'}
            </Text>

            <TextInput style={styles.input} placeholder='E-mail' 
                       value={email}
                       onChangeText={setEmail} 
                       autoCapitalize='none' />
            
            <TextInput style={styles.input} placeholder='Senha' 
                       value={senha}
                       onChangeText={setSenha} 
                       secureTextEntry />
            
            <Button 
                title={ehCadastro ? 'Cadastrar' : 'Entrar'} 
                color='blue'
                onPress={autenticar}
                disabled={carregando}/>
            
            <Button 
                title={ehCadastro ? 'Faça login' : 'Cadastre-se'} 
                color='red'
                onPress={() => setEhCadastro(!ehCadastro)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', padding: 20},
    titulo: {fontSize: 26, fontWeight: 'bold', textAlign: 'center'},
    input: {padding: 10, borderRadius: 10, marginBottom: 15,},
});