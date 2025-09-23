// src/navegacao/NavegacaoPilha.js

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "../telas/TelaInicial";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaConfiguracoes from "../telas/TelaConfiguracoes";

const Stack = createNativeStackNavigator();

export default function NavegacaoPilha(){
    return(
        <Stack.Navigator initialRouteName="Inicial">
            <Stack.Screen name="Inicial" component={TelaInicial} />
            <Stack.Screen name="Detalhes" component={TelaDetalhes} />
            <Stack.Screen name="Configurações" component={TelaConfiguracoes} />
        </Stack.Navigator>
    );
}