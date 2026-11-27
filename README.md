# Agendamento Personal Trainer

## Sobre o projeto

Página de agendamento de aulas com personal trainer. O aluno acompanha o seu perfil,
consulta os treinos, filtra e busca exercícios,
vê as próximas aulas agendadas e fala com o profissional pelo WhatsApp.

Projeto desenvolvido como Trabalho de Conclusão da Disciplina (TCD) do 2º bimestre da disciplina de Desenvolvimento de Aplicações para Web, ministrada pelo Prof. Libório de Oliveira Júnior, seguindo as quatro fases: wireframe, página no `App.tsx`, componentes com dados e estado,
e dados externos.

## Funcionalidades

- Perfil do aluno e apresentação do personal trainer
- Listagem de treinos (exercícios) com filtro por tipo de treino
- Busca de exercícios por nome (campo controlado)
- Botão "Carregar Mais" no mobile e no tablet, quando o filtro está em "Todos"
- Listagem das próximas aulas, com links de agendamento e reagendamento pelo WhatsApp
- Estados de carregando (esqueleto da página) e de erro
- Layout responsivo, mobile first, com adaptações para tablet (768px) e desktop (1024px)

## Tecnologias

- React com TypeScript
- Vite
- Tailwind CSS

## Como executar

```bash
npm install
npm run dev
```

Depois, abra o endereço que o terminal mostrar.

## Fonte dos dados

- **Listagem principal (exercícios):** carregada com `fetch` dentro de `useEffect`, a partir do
  arquivo `public/exercicios.json`, gerado no Mockaroo com os mesmos campos do type `Exercicio`
  (`id`, `nome`, `treino`, `detalhe` e `imagem`).
- **Listagem secundária (próximas aulas):** vem de um vetor de objetos declarado em
  `src/data/aulas.ts`.

## Estrutura do projeto

```
docs/                  wireframes (mobile, tablet e desktop)
public/                imagens e exercicios.json
src/
├── components/        componentes da página
├── data/              types, lista de treinos e vetor de aulas
├── App.tsx            estado da aplicação e composição dos componentes
└── main.tsx
```

## Desafios bonificados

- **Busca:** campo de texto que filtra os exercícios em tempo real.
- **Esqueleto de carregamento:** página em cinza animada enquanto os dados são carregados.