import {
    Treinamento,
    TreinamentoCreate,
    TreinamentoRepository,
  } from "../interfaces/treinamento.interface";
  import { TreinamentoRepositoryPrisma } from "../repositories/treinamento.repository";
  
  class TreinamentoUseCase {
    private treinamentoRepository: TreinamentoRepository;
  
    constructor() {
      this.treinamentoRepository = new TreinamentoRepositoryPrisma();
    }
  
    async create(data: TreinamentoCreate): Promise<Treinamento> {
      try {
        const result = await this.treinamentoRepository.create(data);
        return result;
      } catch (error: any) {
        throw new Error(`Erro ao criar treinamento: ${error.message}`);
      }
    }
  
    async findAll(): Promise<Treinamento[]> {
      try {
        const result = await this.treinamentoRepository.findAll();
        return result;
      } catch (error: any) {
        throw new Error(`Erro ao buscar treinamentos: ${error.message}`);
      }
    }
  }
  
  export { TreinamentoUseCase };
  