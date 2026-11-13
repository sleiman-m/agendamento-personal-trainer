import type { Exercicio } from "../data/types";
import ExercicioCard from "./ExercicioCard";
import FiltroTreinos from "./FiltroTreinos";

type SecaoTreinosProps = {
  exercicios: Exercicio[];
  treinos: string[];
  treinoSelecionado: string;
  onSelecionarTreino: (treino: string) => void;
  mostrarTodos: boolean;
  onCarregarMais: () => void;
};

// Mobile mostra 4 cards, tablet mostra 6 e desktop mostra todos.
function classeLimite(index: number) {
  if (index >= 6) return "max-lg:hidden";
  if (index >= 4) return "max-md:hidden";
  return "";
}

function SecaoTreinos({
  exercicios,
  treinos,
  treinoSelecionado,
  onSelecionarTreino,
  mostrarTodos,
  onCarregarMais,
}: SecaoTreinosProps) {
  const limitarLista = treinoSelecionado === "Todos" && !mostrarTodos;

  return (
    <section className="rounded-2xl bg-gray-50 p-5 shadow-md lg:w-2/3">
      <h2 className="text-2xl font-bold">Meus treinos</h2>

      <FiltroTreinos
        treinos={treinos}
        treinoSelecionado={treinoSelecionado}
        onSelecionarTreino={onSelecionarTreino}
      />

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exercicios.map((exercicio, index) => (
          <ExercicioCard
            key={exercicio.id}
            exercicio={exercicio}
            className={limitarLista ? classeLimite(index) : ""}
          />
        ))}
      </div>

      {limitarLista && (
        <button
          onClick={onCarregarMais}
          className="mx-auto mt-5 block text-sm font-semibold text-fosco hover:underline lg:hidden"
        >
          Carregar Mais
        </button>
      )}
    </section>
  );
}

export default SecaoTreinos;