import type { Exercicio } from "../data/types";

type ExercicioCardProps = {
  exercicio: Exercicio;
};

function ExercicioCard({ exercicio }: ExercicioCardProps) {
  return (
    <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
      <img
        src={exercicio.imagem}
        alt={exercicio.nome}
        className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full"
      />
      <div>
        <h3 className="font-bold lg:min-h-12">{exercicio.nome}</h3>
        <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">
          Treino: {exercicio.treino}
        </span>
        <p className="mt-2 text-sm font-semibold">{exercicio.detalhe}</p>
      </div>
    </article>
  );
}

export default ExercicioCard;