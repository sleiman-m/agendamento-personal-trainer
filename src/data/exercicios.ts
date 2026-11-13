import type { Exercicio } from "./types";

export const treinos: string[] = [
  "Todos",
  "Superiores 1",
  "Inferiores 1",
  "Superiores 2",
  "Inferiores 2",
  "Cardio",
];

export const exercicios: Exercicio[] = [
  { id: 1, nome: "Supino reto", treino: "Superiores 1", detalhe: "4 séries × 12 repetições", imagem: "/exercicios/supino-reto.jpg" },
  { id: 2, nome: "Remada curvada", treino: "Superiores 1", detalhe: "4 séries × 12 repetições", imagem: "/exercicios/remada-curvada.jpg" },
  { id: 3, nome: "Desenvolvimento com halteres", treino: "Superiores 2", detalhe: "3 séries × 12 repetições", imagem: "/exercicios/desenvolvimento-halteres.jpg" },
  { id: 4, nome: "Rosca direta", treino: "Superiores 1", detalhe: "3 séries × 12 repetições", imagem: "/exercicios/rosca-direta.jpg" },
  { id: 5, nome: "Tríceps testa", treino: "Superiores 2", detalhe: "3 séries × 12 repetições", imagem: "/exercicios/triceps-testa.jpg" },
  { id: 6, nome: "Elevação lateral", treino: "Superiores 2", detalhe: "3 séries × 15 repetições", imagem: "/exercicios/elevacao-lateral.jpg" },
  { id: 7, nome: "Agachamento", treino: "Inferiores 1", detalhe: "4 séries × 10 repetições", imagem: "/exercicios/agachamento.jpg" },
  { id: 8, nome: "Leg press", treino: "Inferiores 2", detalhe: "4 séries × 12 repetições", imagem: "/exercicios/leg-press.jpg" },
  { id: 9, nome: "Esteira", treino: "Cardio", detalhe: "30 minutos", imagem: "/exercicios/esteira.jpg" },
  { id: 10, nome: "Bicicleta", treino: "Cardio", detalhe: "30 minutos", imagem: "/exercicios/bicicleta.jpg" },
];