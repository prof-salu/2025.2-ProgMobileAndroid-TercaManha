// src/navegacao/NavegacaoAbas.js

import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaInicial from "../telas/TelaInicial";
import TelaDetalhes from "../telas/TelaDetalhes";
import TelaConfiguracoes from "../telas/TelaConfiguracoes";

const Drawer = createDrawerNavigator();

export default function NavegacaoGaveta(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Inicial" component={TelaInicial} />
            <Drawer.Screen name="Detalhes" component={TelaDetalhes} />
            <Drawer.Screen name="Configurações" component={TelaConfiguracoes} />
        </Drawer.Navigator>
    );
}