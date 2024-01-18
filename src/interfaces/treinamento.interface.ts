export interface Treinamento {
    id: string;
    nome: string;
    nr: string;
    validade: number;
  }
  
  export interface TreinamentoCreate {
    nome: string;
    nr: string;
    validade: number;
  }
  
  export interface TreinamentoRepository {
    create(data: TreinamentoCreate): Promise<Treinamento>;
    findAll(): Promise<Treinamento[]>;
  }
  