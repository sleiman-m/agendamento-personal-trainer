type CampoBuscaProps = {
  valor: string;
  onMudar: (valor: string) => void;
};

function CampoBusca({ valor, onMudar }: CampoBuscaProps) {
  return (
    <input
      type="search"
      value={valor}
      onChange={(evento) => onMudar(evento.target.value)}
      placeholder="Buscar exercício..."
      aria-label="Buscar exercício"
      className="mt-4 w-full rounded-full bg-white px-4 py-2 text-sm shadow-sm outline-none focus:ring-2 focus:ring-fosco"
    />
  );
}

export default CampoBusca;