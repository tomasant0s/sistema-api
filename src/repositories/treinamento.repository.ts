import { prisma } from "../database/prisma-client";
import {
  Treinamento,
  TreinamentoCreate,
  TreinamentoRepository,
} from "../interfaces/treinamento.interface";

class TreinamentoRepositoryPrisma implements TreinamentoRepository {
  async create(data: TreinamentoCreate): Promise<Treinamento> {
    try {
      const result = await prisma.treinamento.create({
        data,
      });
      return result;
    } catch (error: any) {
      throw new Error(`Erro ao criar treinamento: ${error.message}`);
    }
  }

  async findAll(): Promise<Treinamento[]> {
    try {
      const treinamentos = await prisma.treinamento.findMany();
      return treinamentos;
    } catch (error: any) {
      throw new Error(`Erro ao buscar treinamentos: ${error.message}`);
    }
  }
}

export { TreinamentoRepositoryPrisma };

