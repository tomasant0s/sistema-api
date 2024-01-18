export interface Funcionario {
    id: string;
    nome: string;
    matricula: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface FuncionarioCreate {
    nome: string;
    matricula: string;
  }
  
  export interface FuncionarioRepository {
    create(data: FuncionarioCreate): Promise<Funcionario>;
    findAll(): Promise<Funcionario[]>;
  }
  