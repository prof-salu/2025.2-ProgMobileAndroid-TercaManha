//DAO --> Data Acess Object
//Classe responsavel pela interação com os dados da aplicação
import AsyncStorage from '@react-native-async-storage/async-storage';

//Chave com informações de acesso ao arquivo
const CHAVE_LEMBRETES = '@lembretesApp:lembretes';

export async function obterTodos(){
    try{
        //Acessa o arquivo com os dados
        const jsonValue = await AsyncStorage.getItem(CHAVE_LEMBRETES);
        //Converte os dados do arquivo
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    }catch(error){
        console.log('Erro ao ler os lembretes.');
        return [];
    }
}

export async function salvarTodos(lembretes){
    try{
        //Converte a lista para json
        const jsonValue = JSON.stringify(lembretes);
        //Grava o conteudo da lista no arquivo
        await AsyncStorage.setItem(CHAVE_LEMBRETES, jsonValue);
    }catch(error){
        console.log('Erro ao salvar os lembretes.');
    }
}