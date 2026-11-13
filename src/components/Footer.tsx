function Footer() {
  return (
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
  );
}

export default Footer;