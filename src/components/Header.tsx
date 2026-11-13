function Header() {
  return (
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
  );
}

export default Header;