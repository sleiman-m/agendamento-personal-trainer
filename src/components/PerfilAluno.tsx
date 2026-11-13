function PerfilAluno() {
  return (
    <section className="flex flex-col gap-5 rounded-2xl bg-gray-50 p-5 shadow-md md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <img
            src="/foto-aluno.png"
            alt="Foto de Sleiman"
            className="h-20 w-20 rounded-full object-cover"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-fosco">Aluno(a)</p>
            <p className="text-lg font-bold">Sleiman</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-gray-200 px-3 py-2 text-center lg:px-4">
            <p className="text-xs text-zinc-500">Idade</p>
            <p className="font-bold">26 anos</p>
          </div>
          <div className="rounded-xl bg-gray-200 px-3 py-2 text-center lg:px-4">
            <p className="text-xs text-zinc-500">Altura</p>
            <p className="font-bold">1,80 m</p>
          </div>
          <div className="rounded-xl bg-gray-200 px-3 py-2 text-center lg:px-4">
            <p className="text-xs text-zinc-500">Peso</p>
            <p className="font-bold">75 kg</p>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/5500000000000"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-fosco px-4 py-3 text-center text-sm font-semibold text-white shadow transition hover:bg-fosco-escuro lg:px-6 lg:text-base"
      >
        Fale com o Personal · WhatsApp
      </a>
    </section>
  );
}

export default PerfilAluno;