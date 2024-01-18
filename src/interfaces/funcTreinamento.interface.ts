import { Funcionario } from "./funcionario.interface";
import { Treinamento } from "./treinamento.interface";

export interface TreinamentosFuncionario {
  funcionario: Funcionario;
  treinamento: Treinamento;
  dataTreinamento: Date;
  createdAt: Date;
}

export interface TreinamentoFuncionarioCreate {
  funcionarioId: string;
  treinamentoId: string;
  dataTreinamento: Date;
}

export interface TreinamentoFuncionarioRepository {
  create(data: TreinamentoFuncionarioCreate): Promise<TreinamentosFuncionario>;
  findAll(): Promise<TreinamentosFuncionario[]>;
}