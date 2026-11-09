function App() {
  return (
    <div className="relative min-h-screen bg-gray-200 text-zinc-800">
      <div className="absolute inset-x-0 top-0 h-150 bg-linear-to-b from-fosco via-fosco-claro to-gray-200 md:h-96" />

      <header className="relative">
        <div className="mx-auto flex max-w-6xl flex-col px-4 pt-4 md:flex-row md:items-end md:justify-between">
          <div className="flex items-end gap-4">
            <img
              src="/foto-personal.png"
              alt="Maicon Junior, personal trainer"
              className="h-40 w-40 shrink-0 object-cover object-top"
            />
            <div className="pb-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-100">
                Personal Trainer
              </p>
              <h1 className="text-xl font-bold text-white">Maicon Junior</h1>
              <p className="text-sm text-red-100">
                Profissional em Educação Física · CREF 012345-G/PR
              </p>
            </div>
          </div>
            <p className="order-first pb-3 text-right text-lg text-red-50 md:order-none md:pb-4 md:text-2xl">
              Bem-vindo(a), <span className="font-bold text-white">Sleiman</span>!
            </p>
        </div>
      </header>

    <main className="relative mx-auto max-w-6xl px-4 pb-6">
      <section className="flex flex-col gap-5 rounded-2xl bg-gray-50 p-5 shadow-md md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img
              src="/foto-aluno.png"
              alt="Foto de Sleiman"
              className="h-20 w-20 rounded-full object-cover"
            />
            <div className="md:hidden">
              <p className="text-xs font-semibold uppercase tracking-wide text-fosco">Aluno</p>
              <p className="text-lg font-bold">Sleiman</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-gray-200 px-4 py-2 text-center">
              <p className="text-xs text-zinc-500">Idade</p>
              <p className="font-bold">26 anos</p>
            </div>
            <div className="rounded-xl bg-gray-200 px-4 py-2 text-center">
              <p className="text-xs text-zinc-500">Altura</p>
              <p className="font-bold">1,80 m</p>
            </div>
            <div className="rounded-xl bg-gray-200 px-4 py-2 text-center">
              <p className="text-xs text-zinc-500">Peso</p>
              <p className="font-bold">75 kg</p>
            </div>
          </div>
        </div>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-fosco px-6 py-3 text-center font-semibold text-white shadow transition hover:bg-fosco-escuro"
        >
          Fale com o Personal · WhatsApp
        </a>
      </section>

      {/* Meus treinos */}
      {/* Próximas aulas */}
</main>

      {/* footer */}
    </div>
  )
}

export default App