import "./App.css";
import Menu from "./componentes/Menu";
import EscolherLeitura from "./componentes/EscolherLeitura";
import Rodape from "./componentes/Rodape";

const App = () => {
  return (
    <div className="app">
      <Menu />
      <main className="conteudo-principal">
        <EscolherLeitura />
      </main>
      <Rodape />
    </div>
  );
};

export default App;
