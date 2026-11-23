type CardEsqueletoProps = {
  className?: string;
};

function CardEsqueleto({ className = "" }: CardEsqueletoProps) {
  return (
    <div
      className={`flex animate-pulse gap-3 rounded-xl bg-white p-3 shadow-sm md:flex-col ${className}`}
    >
      <div className="h-20 w-20 shrink-0 rounded-lg bg-gray-200 md:h-36 md:w-full" />
      <div className="flex-1">
        <div className="h-4 w-3/4 rounded bg-gray-200" />
        <div className="mt-2 h-4 w-1/2 rounded-full bg-gray-200" />
        <div className="mt-3 h-4 w-2/3 rounded bg-gray-200" />
      </div>
    </div>
  );
}

export default CardEsqueleto;