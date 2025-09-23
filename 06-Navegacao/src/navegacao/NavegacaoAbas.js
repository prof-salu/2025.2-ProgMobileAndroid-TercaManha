// src/navegacao/NavegacaoAbas.js

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TelaInicial from "../telas/TelaInicial";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaConfiguracoes from "../telas/TelaConfiguracoes";

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Inicial" component={TelaInicial} />
            <Tab.Screen name="Detalhes" component={TelaDetalhes} />
            <Tab.Screen name="Configurações" component={TelaConfiguracoes} />
        </Tab.Navigator>
    );
}