import {
    Funcionario,
    FuncionarioCreate,
    FuncionarioRepository,
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
  }
  
  export { FuncionarioUseCase };
  