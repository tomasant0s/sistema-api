import { prisma } from "../database/prisma-client";
import {
  Treinamento,
  TreinamentoCreate,
  TreinamentoRepository,
  TreinamentoUpdate,
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

  async update(id: string, data: TreinamentoUpdate): Promise<Treinamento | null> {
    try {
      const result = await prisma.treinamento.update({
        where: { id },
        data,
      });
      return result;
    } catch (error: any) {
      console.error(`Erro ao atualizar funcionário: ${error.message}`);
      return null;
    }
  }
}

export { TreinamentoRepositoryPrisma };

