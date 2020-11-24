export interface Partida {
  id: string;
  jogadores: Jogador[];
  modais?: Modal[];
  qtdRodadas: number;
  rodadas: Rodada[];
  dificuldade: 'fácil' | 'médio' | 'difícil';
}

export interface Jogador {
  id: string;
  nome: string;
  saldo: string;
}

export interface Rodada {
  pedidos: Pedido[];
  tempo: string;
}

export interface Modal {
  combustivel?: string;
  documento: DocumentoDeCarga;
  documentoObrigatorio: boolean;
  nome: string;
  capacidadePeso: Peso;
  tanque?: {
    unidadeDeMedida: string;
    capacidade: number;
  };
  valor: number;
}

export interface Pedido {
  categoria: 'urgente' | 'regular';
  custormAzenagem: number;
  peso: Peso;
  recompensa: number;
}

export interface Peso {
  peso: number;
  unidadeDeMedida: string;
}

export interface DocumentoDeCarga {
  tipo: 'multimodal' | 'intermodal';
  valor: number;
}
