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

        <div className="order-first flex items-center gap-3 pb-4 pt-6 md:order-none md:flex-1 md:pb-16 md:pr-12 md:pt-0 lg:pr-0">
          <img
            src="/favicon-personal.png"
            alt="Logo do site"
            className="h-10 w-10 shrink-0 rounded-xl bg-white p-1 md:hidden"
          />
          <p className="text-xl font-bold text-red-50 md:w-full md:text-center md:text-2xl lg:text-3xl">
            Bem-vindo(a), <span className="text-white">Sleiman</span>!
          </p>
        </div>
      </div>
    </header>



    {/* SEÇÃO: PERFIL DO ALUNO */}

    <main className="relative mx-auto max-w-6xl px-4 pb-6">
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



      {/* SEÇÃO: MEUS TREINOS */}

      <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
      <section className="rounded-2xl bg-gray-50 p-5 shadow-md lg:w-2/3">
        <h2 className="text-2xl font-bold">Meus treinos</h2>

        <div className="mt-4 flex flex-wrap gap-2">
          <button className="rounded-full bg-fosco px-4 py-1.5 text-sm font-semibold text-white">Todos</button>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm shadow-sm">Superiores 1</button>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm shadow-sm">Inferiores 1</button>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm shadow-sm">Superiores 2</button>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm shadow-sm">Inferiores 2</button>
          <button className="rounded-full bg-white px-4 py-1.5 text-sm shadow-sm">Cardio</button>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img
              src="/exercicios/supino-reto.jpg"
              alt="Supino reto"
              className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full"
            />
            <div>
              <h3 className="font-bold lg:min-h-12">Supino reto</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">
                Treino: Superiores 1
              </span>
              <p className="mt-2 text-sm font-semibold">4 séries × 12 repetições</p>
            </div>
          </article>
          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/remada-curvada.jpg" alt="Remada curvada" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Remada curvada</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Superiores 1</span>
              <p className="mt-2 text-sm font-semibold">4 séries × 12 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/desenvolvimento-halteres.jpg" alt="Desenvolvimento com halteres" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Desenvolvimento com halteres</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Superiores 2</span>
              <p className="mt-2 text-sm font-semibold">3 séries × 12 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/rosca-direta.jpg" alt="Rosca direta" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Rosca direta</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Superiores 1</span>
              <p className="mt-2 text-sm font-semibold">3 séries × 12 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/triceps-testa.jpg" alt="Tríceps testa" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Tríceps testa</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Superiores 2</span>
              <p className="mt-2 text-sm font-semibold">3 séries × 12 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/elevacao-lateral.jpg" alt="Elevação lateral" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Elevação lateral</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Superiores 2</span>
              <p className="mt-2 text-sm font-semibold">3 séries × 15 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/agachamento.jpg" alt="Agachamento" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Agachamento</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Inferiores 1</span>
              <p className="mt-2 text-sm font-semibold">4 séries × 10 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/leg-press.jpg" alt="Leg press" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Leg press</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Inferiores 2</span>
              <p className="mt-2 text-sm font-semibold">4 séries × 12 repetições</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/esteira.jpg" alt="Esteira" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Esteira</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Cardio</span>
              <p className="mt-2 text-sm font-semibold">30 minutos</p>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col">
            <img src="/exercicios/bicicleta.jpg" alt="Bicicleta" className="h-20 w-20 shrink-0 rounded-lg object-cover md:h-36 md:w-full" />
            <div>
              <h3 className="font-bold lg:min-h-12">Bicicleta</h3>
              <span className="mt-1 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-zinc-500">Treino: Cardio</span>
              <p className="mt-2 text-sm font-semibold">30 minutos</p>
            </div>
          </article>
        </div>
      </section>



     {/* SEÇÃO: PRÓXIMAS AULAS */}

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
          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm">
            <img src="/aulas/academia.jpg" alt="Academia" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
            <div>
              <p className="font-bold">12/11 · 18:00</p>
              <p className="text-sm text-zinc-500">Local: Academia Força Total</p>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20reagendar%20minha%20aula%20de%2012%2F11."
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-full border border-fosco px-3 py-1 text-xs font-semibold text-fosco transition hover:bg-fosco hover:text-white"
              >
                Reagendar
              </a>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm">
            <img src="/aulas/parque.jpg" alt="Parque" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
            <div>
              <p className="font-bold">16/11 · 07:00</p>
              <p className="text-sm text-zinc-500">Local: Parque Municipal</p>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20reagendar%20minha%20aula%20de%2016%2F11."
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-full border border-fosco px-3 py-1 text-xs font-semibold text-fosco transition hover:bg-fosco hover:text-white"
              >
                Reagendar
              </a>
            </div>
          </article>

          <article className="flex gap-3 rounded-xl bg-white p-3 shadow-sm">
            <img src="/aulas/academia.jpg" alt="Academia" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
            <div>
              <p className="font-bold">19/11 · 18:00</p>
              <p className="text-sm text-zinc-500">Local: Academia Força Total</p>
              <a
                href="https://wa.me/5500000000000?text=Ol%C3%A1!%20Quero%20reagendar%20minha%20aula%20de%2019%2F11."
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block rounded-full border border-fosco px-3 py-1 text-xs font-semibold text-fosco transition hover:bg-fosco hover:text-white"
              >
                Reagendar
              </a>
            </div>
          </article>
        </div>
      </section>


</div>

</main>

<footer className="relative mx-auto max-w-6xl px-4 pb-8">
  <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-5 shadow-md md:flex-row md:justify-between">
    <div>
      <h2 className="text-xl font-bold">Sobre o profissional</h2>
      <p className="mt-1 text-sm text-zinc-500">Maicon Junior · CREF 012345-G/PR</p>
      <ul className="mt-3 space-y-1 text-sm">
        <li>Bacharel em Educação Física</li>
        <li>Pós-graduação em Treinamento Resistido</li>
        <li>Especialização em Condicionamento e Emagrecimento</li>
      </ul>
    </div>

    <div>
      <h2 className="text-xl font-bold">Contato</h2>
      <div className="mt-3 flex flex-col gap-2">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-fosco px-4 py-2 text-center text-sm font-semibold text-fosco transition hover:bg-fosco hover:text-white"
        >
          WhatsApp · (00) 0 0000-0000
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-fosco px-4 py-2 text-center text-sm font-semibold text-fosco transition hover:bg-fosco hover:text-white"
        >
          Instagram · @maiconjunior
        </a>
      </div>
    </div>
  </div>

  <p className="mt-4 flex items-center justify-center gap-2 text-xs text-zinc-500">
    Desenvolvido por
    <img src="/favicon-personal.png" alt="Logo" className="h-5 w-5" />
  </p>

</footer>
    </div>
  )
}

export default App