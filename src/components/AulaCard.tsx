import type { Aula } from "../data/types";

type AulaCardProps = {
  aula: Aula;
};

function AulaCard({ aula }: AulaCardProps) {
  const mensagem = encodeURIComponent(
    `Olá! Quero reagendar minha aula de ${aula.data}.`
  );

  return (
    <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm">
      <img
        src={aula.imagem}
        alt={aula.local}
        className="h-16 w-16 shrink-0 rounded-lg object-cover"
      />
      <div>
        <p className="font-bold">
          {aula.data} · {aula.hora}
        </p>
        <p className="text-sm text-zinc-500">Local: {aula.local}</p>
        <a
          href={`https://wa.me/5500000000000?text=${mensagem}`}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block rounded-full border border-fosco px-3 py-1 text-xs font-semibold text-fosco transition hover:bg-fosco hover:text-white"
        >
          Reagendar
        </a>
      </div>
    </article>
  );
}

export default AulaCard;