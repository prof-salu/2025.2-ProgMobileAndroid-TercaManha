import { View} from 'react-native';
import { useState, useEffect } from 'react';

import Home from './src/telas/Home';
import Autenticacao from './src/telas/Autenticacao';

import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseconfig';

export default function App() {
  const [user, setUser] = useState(null);
  const [inicializando, setInicializando] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUSer) => {
      setUser(firebaseUSer);
      if(inicializando){
        setInicializando(false);
      }
      return unsubscribe;
    })
  }, [])

  return user ? <Home user={user} /> : <Autenticacao />
}