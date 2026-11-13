import type { Exercicio } from "../data/types";
import ExercicioCard from "./ExercicioCard";
import FiltroTreinos from "./FiltroTreinos";

type SecaoTreinosProps = {
  exercicios: Exercicio[];
  treinos: string[];
  treinoSelecionado: string;
  onSelecionarTreino: (treino: string) => void;
};

function SecaoTreinos({
  exercicios,
  treinos,
  treinoSelecionado,
  onSelecionarTreino,
}: SecaoTreinosProps) {
  return (
    <section className="rounded-2xl bg-gray-50 p-5 shadow-md lg:w-2/3">
      <h2 className="text-2xl font-bold">Meus treinos</h2>

      <FiltroTreinos
        treinos={treinos}
        treinoSelecionado={treinoSelecionado}
        onSelecionarTreino={onSelecionarTreino}
      />

      <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {exercicios.map((exercicio) => (
          <ExercicioCard key={exercicio.id} exercicio={exercicio} />
        ))}
      </div>
    </section>
  );
}

export default SecaoTreinos;