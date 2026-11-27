import CardEsqueleto from "./CardEsqueleto";

type BlocoProps = {
  className?: string;
};

function Bloco({ className = "" }: BlocoProps) {
  return <div className={`animate-pulse rounded ${className}`} />;
}

function PaginaEsqueleto() {
  return (
    <div
      role="status"
      aria-label="Carregando página"
      className="relative min-h-screen bg-gray-200"
    >
      <div className="absolute inset-x-0 top-0 h-150 bg-linear-to-b from-fosco via-fosco-claro to-gray-200 md:h-96" />

      {/* Cabeçalho */}
      <div className="relative mx-auto flex max-w-6xl flex-col px-4 pt-4 md:flex-row md:items-end md:justify-between">
        <div className="flex items-end gap-4">
          <Bloco className="h-40 w-40 shrink-0 bg-white/30" />
          <div className="space-y-2 pb-4">
            <Bloco className="h-3 w-24 bg-white/30" />
            <Bloco className="h-5 w-40 bg-white/30" />
            <Bloco className="h-3 w-52 bg-white/30" />
          </div>
        </div>
        <div className="order-first flex pb-4 pt-6 md:order-none md:flex-1 md:justify-center md:pb-16 md:pt-0">
          <Bloco className="h-7 w-56 bg-white/30" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-6">
        {/* Perfil do aluno */}
        <div className="flex flex-col gap-5 rounded-2xl bg-gray-50 p-5 shadow-md md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <Bloco className="h-20 w-20 rounded-full bg-gray-200" />
              <div className="space-y-2">
                <Bloco className="h-3 w-16 bg-gray-200" />
                <Bloco className="h-5 w-24 bg-gray-200" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Bloco className="h-14 rounded-xl bg-gray-200 md:w-20" />
              <Bloco className="h-14 rounded-xl bg-gray-200 md:w-20" />
              <Bloco className="h-14 rounded-xl bg-gray-200 md:w-20" />
            </div>
          </div>
          <Bloco className="h-11 rounded-full bg-gray-200 md:w-60" />
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start">
          {/* Meus treinos */}
          <div className="rounded-2xl bg-gray-50 p-5 shadow-md lg:w-2/3">
            <Bloco className="h-7 w-40 bg-gray-200" />
            <Bloco className="mt-4 h-10 w-full rounded-full bg-gray-200" />
            <div className="mt-4 flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5, 6].map((numero) => (
                <Bloco
                  key={numero}
                  className="h-8 w-20 rounded-full bg-gray-200"
                />
              ))}
            </div>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((numero, index) => (
                <CardEsqueleto
                  key={numero}
                  className={index >= 4 ? "max-md:hidden" : ""}
                />
              ))}
            </div>
          </div>

          {/* Próximas aulas */}
          <div className="rounded-2xl bg-gray-50 p-5 shadow-md lg:w-1/3">
            <div className="md:flex md:items-center md:justify-between lg:block">
              <Bloco className="h-7 w-40 bg-gray-200" />
              <Bloco className="mt-4 h-10 rounded-full bg-gray-200 md:w-52 lg:w-full" />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-1">
              {[1, 2, 3].map((numero) => (
                <div
                  key={numero}
                  className="flex gap-3 rounded-xl bg-white p-3 shadow-sm"
                >
                  <Bloco className="h-16 w-16 shrink-0 rounded-lg bg-gray-200" />
                  <div className="flex-1 space-y-2">
                    <Bloco className="h-4 w-24 bg-gray-200" />
                    <Bloco className="h-3 w-32 bg-gray-200" />
                    <Bloco className="h-5 w-16 rounded-full bg-gray-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="relative mx-auto max-w-6xl px-4 pb-8">
        <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 p-5 shadow-md md:flex-row md:justify-between">
          <div className="space-y-2">
            <Bloco className="h-6 w-44 bg-gray-200" />
            <Bloco className="h-3 w-52 bg-gray-200" />
            <Bloco className="h-3 w-40 bg-gray-200" />
          </div>
          <div className="space-y-2">
            <Bloco className="h-6 w-24 bg-gray-200" />
            <Bloco className="h-9 w-56 rounded-full bg-gray-200" />
            <Bloco className="h-9 w-56 rounded-full bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaEsqueleto;