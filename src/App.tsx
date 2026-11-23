import { useEffect, useState } from "react";
import type { Exercicio } from "./data/types";
import { treinos } from "./data/treinos";
import { aulas } from "./data/aulas";
import Header from "./components/Header";
import PerfilAluno from "./components/PerfilAluno";
import SecaoTreinos from "./components/SecaoTreinos";
import ProximasAulas from "./components/ProximasAulas";
import Footer from "./components/Footer";
import PaginaEsqueleto from "./components/PaginaEsqueleto";

function App() {
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [treinoSelecionado, setTreinoSelecionado] = useState("Todos");
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [busca, setBusca] = useState("");

  function selecionarTreino(treino: string) {
    setTreinoSelecionado(treino);
    setMostrarTodos(false);
  }

  useEffect(() => {
    async function carregarExercicios() {
      try {
        const resposta = await fetch("/exercicios.json");
        if (!resposta.ok) {
          throw new Error("Resposta inválida do servidor");
        }
        const dados: Exercicio[] = await resposta.json();
        setExercicios(dados);
      } catch {
        setErro("Não foi possível carregar os treinos. Tente novamente mais tarde.");
      } finally {
        setCarregando(false);
      }
    }

    carregarExercicios();
  }, []);

  const termo = busca.trim().toLowerCase();

  const exerciciosFiltrados = exercicios.filter((exercicio) => {
    const bateTreino =
      treinoSelecionado === "Todos" || exercicio.treino === treinoSelecionado;
    const bateBusca = exercicio.nome.toLowerCase().includes(termo);
    return bateTreino && bateBusca;
  });

  if (carregando) {
    return <PaginaEsqueleto />;
  }

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
            onSelecionarTreino={selecionarTreino}
            erro={erro}
            busca={busca}
            onBuscar={setBusca}
            mostrarTodos={mostrarTodos}
            onCarregarMais={() => setMostrarTodos(true)}
          />
          <ProximasAulas aulas={aulas} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;