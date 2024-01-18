import { prisma } from "../database/prisma-client";
import { TreinamentosFuncionario, TreinamentoFuncionarioCreate, TreinamentoFuncionarioRepository } from "../interfaces/funcTreinamento.interface";

class TreinamentoFuncionarioRepositoryPrisma implements TreinamentoFuncionarioRepository {
  async create(data: TreinamentoFuncionarioCreate): Promise<TreinamentosFuncionario> {
    const { funcionarioId, treinamentoId, dataTreinamento } = data;
  
    const result = await prisma.treinamentosFuncionario.create({
      data: {
        funcionarioId,
        treinamentoId,
        dataTreinamento,
      },
      include: {
        funcionario: true,
        treinamento: true,
      },
    });
  
    return result;
  }
  
  

  async findAll(): Promise<TreinamentosFuncionario[]> {
    const treinamentosFuncionarios = await prisma.treinamentosFuncionario.findMany({
      include: {
        funcionario: true,
        treinamento: true,
      },
    });
  
    return treinamentosFuncionarios;
  }
  
}

export { TreinamentoFuncionarioRepositoryPrisma };