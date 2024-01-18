export interface Funcionario {
    id: string;
    nome: string;
    matricula: string;
    createdAt: Date;
    updatedAt: Date;
  }

export interface FuncionarioUpdate {
  nome?: string;
  matricula?: string;
}

  
  export interface FuncionarioCreate {
    nome: string;
    matricula: string;
  }
  
  export interface FuncionarioRepository {
    create(data: FuncionarioCreate): Promise<Funcionario>;
    findAll(): Promise<Funcionario[]>;
    update(id: string, data: FuncionarioUpdate): Promise<Funcionario | null>;
  }
  