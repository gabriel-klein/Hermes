export interface Ranking {
  id: string;
  jogador: {
    id: string;
    nome: string;
    photoURL: string;
  };
  pontuacao: number;
  posicao?: number;
}
