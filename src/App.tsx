import { useState } from "react";
import { exercicios, treinos } from "./data/exercicios";
import { aulas } from "./data/aulas";
import Header from "./components/Header";
import PerfilAluno from "./components/PerfilAluno";
import SecaoTreinos from "./components/SecaoTreinos";
import ProximasAulas from "./components/ProximasAulas";
import Footer from "./components/Footer";

function App() {
  const [treinoSelecionado, setTreinoSelecionado] = useState("Todos");
  const [mostrarTodos, setMostrarTodos] = useState(false);

  function selecionarTreino(treino: string) {
    setTreinoSelecionado(treino);
    setMostrarTodos(false);
  }

  const exerciciosFiltrados =
    treinoSelecionado === "Todos"
      ? exercicios
      : exercicios.filter((exercicio) => exercicio.treino === treinoSelecionado);

  return (
    <div className="relative min-h-screen bg-gray-200 text-zinc-800">
      <div className="absolute inset-x-0 top-0 h-150 bg-linear-to-b from-fosco via-fosco-claro to-gray-200 md:h-96" />

      <Header />

      <main className="relative mx-auto max-w-6xl px-4 pb-6">
        <PerfilAluno />

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          <SecaoTreinos
            exercicios={exerciciosFiltrados}
            treinos={treinos}
            treinoSelecionado={treinoSelecionado}
            mostrarTodos={mostrarTodos}
            onCarregarMais={() => setMostrarTodos(true)}
            onSelecionarTreino={selecionarTreino}
          />
          <ProximasAulas aulas={aulas} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;