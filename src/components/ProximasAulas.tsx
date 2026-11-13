import type { Aula } from "../data/types";
import AulaCard from "./AulaCard";

type ProximasAulasProps = {
  aulas: Aula[];
};

function ProximasAulas({ aulas }: ProximasAulasProps) {
  return (
    <section className="rounded-2xl bg-gray-50 p-5 shadow-md lg:w-1/3">
      <div className="md:flex md:items-center md:justify-between lg:block">
        <h2 className="text-2xl font-bold">Próximas aulas</h2>

        <a
          href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20agendar%20minha%20pr%C3%B3xima%20aula."
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-full bg-fosco px-5 py-2.5 text-center text-sm font-semibold text-white shadow transition hover:bg-fosco-escuro"
        >
          Agendar próxima aula
        </a>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-1">
        {aulas.map((aula) => (
          <AulaCard key={aula.id} aula={aula} />
        ))}
      </div>
    </section>
  );
}

export default ProximasAulas;