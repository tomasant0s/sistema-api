import {
    Funcionario,
    FuncionarioCreate,
    FuncionarioRepository,
    FuncionarioUpdate,
  } from "../interfaces/funcionario.interface";
  import { FuncionarioRepositoryPrisma } from "../repositories/funcionario.repository";
  
  class FuncionarioUseCase {
    private funcionarioRepository: FuncionarioRepository;
  
    constructor() {
      this.funcionarioRepository = new FuncionarioRepositoryPrisma();
    }
  
    async create(data: FuncionarioCreate): Promise<Funcionario> {
      try {
        const result = await this.funcionarioRepository.create(data);
        return result;
      } catch (error:any) {
        throw new Error(`Erro ao criar funcionário: ${error.message}`);
      }
    }
  
    async findAll(): Promise<Funcionario[]> {
      try {
        const result = await this.funcionarioRepository.findAll();
        return result;
      } catch (error:any) {
        throw new Error(`Erro ao buscar funcionários: ${error.message}`);
      }
    }

    async update(id: string, data: FuncionarioUpdate): Promise<Funcionario | null> {
      try {
        const result = await this.funcionarioRepository.update(id, data);
        return result;
      } catch (error: any) {
        throw new Error(`Erro ao atualizar funcionário: ${error.message}`);
      }
    }
  }
  
  export { FuncionarioUseCase };
  