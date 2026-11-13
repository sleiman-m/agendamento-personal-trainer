export type Exercicio = {
  id: number;
  nome: string;
  treino: string;
  detalhe: string;   // "4 séries × 12 repetições" ou "30 minutos"
  imagem: string;
};

export type Aula = {
  id: number;
  data: string;      // "12/11"
  hora: string;      // "18:00"
  local: string;
  imagem: string;
};