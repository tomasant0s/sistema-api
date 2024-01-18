import { prisma } from "../database/prisma-client";
import {
    Funcionario,
    FuncionarioCreate,
    FuncionarioRepository,
} from "../interfaces/funcionario.interface";

class FuncionarioRepositoryPrisma implements FuncionarioRepository {
    async create(data: FuncionarioCreate): Promise<Funcionario> {
        try {
            const result = await prisma.funcionario.create({
                data, 
            });
            return result;
        } catch (error: any) {
            console.error("Erro ao criar funcionário:", error);
            throw new Error(`Erro ao criar funcionário: ${error.message}`);
        }
    }


    async findAll(): Promise<Funcionario[]> {
        try {
            const funcionarios = await prisma.funcionario.findMany();
            return funcionarios;
        } catch (error: any) {
            throw new Error(`Erro ao buscar funcionários: ${error.message}`);
        }
    }
}

export { FuncionarioRepositoryPrisma };
