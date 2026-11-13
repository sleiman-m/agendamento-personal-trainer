type FiltroTreinosProps = {
  treinos: string[];
  treinoSelecionado: string;
  onSelecionarTreino: (treino: string) => void;
};

function FiltroTreinos({
  treinos,
  treinoSelecionado,
  onSelecionarTreino,
}: FiltroTreinosProps) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {treinos.map((treino) => (
        <button
          key={treino}
          onClick={() => onSelecionarTreino(treino)}
          className={
            treino === treinoSelecionado
              ? "rounded-full bg-fosco px-4 py-1.5 text-sm font-semibold text-white"
              : "rounded-full bg-white px-4 py-1.5 text-sm shadow-sm"
          }
        >
          {treino}
        </button>
      ))}
    </div>
  );
}

export default FiltroTreinos;