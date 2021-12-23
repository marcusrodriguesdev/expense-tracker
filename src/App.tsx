import { GlobalStyle } from "./styles/GlobalStyle";
import * as C from './App.styles';

const App = () => {
  return (
    <C.Container>
      <GlobalStyle />
      Expenser Tracker
    </C.Container>
  );
}

export default App;