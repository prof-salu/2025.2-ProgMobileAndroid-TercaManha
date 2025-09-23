import { NavigationContainer } from "@react-navigation/native";
import NavegacaoPilha from "./src/navegacao/NavegacaoPilha";
import NavegacaoAbas from "./src/navegacao/NavegacaoAbas";
import NavegacaoGaveta from "./src/navegacao/NavegacaoGaveta";

export default function App() {
  return (
    <NavigationContainer>
      <NavegacaoGaveta />
    </NavigationContainer>
  );
}

