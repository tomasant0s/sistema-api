import { TreinamentosFuncionario, TreinamentoFuncionarioCreate, TreinamentoFuncionarioRepository } from "../interfaces/funcTreinamento.interface";
import { TreinamentoFuncionarioRepositoryPrisma } from "../repositories/funcTreinamento.repository";

class TreinamentoFuncionarioUseCase {
  private treinamentoFuncionarioRepository: TreinamentoFuncionarioRepository;

  constructor() {
    this.treinamentoFuncionarioRepository = new TreinamentoFuncionarioRepositoryPrisma();
  }

  async create(data: TreinamentoFuncionarioCreate): Promise<TreinamentosFuncionario> {
    try {
      const result = await this.treinamentoFuncionarioRepository.create(data);
      return result;
    } catch (error) {
      handleRepositoryError(error, "Erro ao associar treinamento a funcionário.");
    }
  }

  async findAll(): Promise<TreinamentosFuncionario[]> {
    try {
      const result = await this.treinamentoFuncionarioRepository.findAll();
      return result;
    } catch (error) {
      handleRepositoryError(error, "Erro ao buscar treinamentos associados a funcionários.");
    }
  }
}

export { TreinamentoFuncionarioUseCase };

function handleRepositoryError(error: unknown, defaultMessage: string): never {
  if (isError(error)) {
    throw new Error(`Repository Error: ${error.message}`);
  } else {
    throw new Error(defaultMessage);
  }
}

function isError(value: unknown): value is Error {
  return value instanceof Error;
}
