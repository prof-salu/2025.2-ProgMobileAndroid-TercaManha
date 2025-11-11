import {db} from '../../firebaseconfig';
import { collection, addDoc, updateDoc, deleteDoc,
         doc, onSnapshot } from 'firebase/firestore';

//Difine o nome da coleção no firebase         
const NOME_COLECAO = 'lembretes';

//Cria/abre uma coleção
const colecao = collection(db, NOME_COLECAO);         

export function adicionar(lembrete){
    return addDoc(colecao, lembrete);
}
//listening
export function ouvirLembretes(callback){
    return onSnapshot(colecao, snapshot => {
        const lembretes = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
        callback(lembretes);
    });
}

export function apagar(id){
    const lembreteDoc = doc(db, NOME_COLECAO, id);
    return deleteDoc(lembreteDoc);
}

export function editar(id, lembrete){
    const lembreteDoc = doc(db, NOME_COLECAO, id);
    return updateDoc(lembreteDoc, lembrete);
}