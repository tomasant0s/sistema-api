import { FastifyInstance } from "fastify";
import { TreinamentoFuncionarioCreate } from "../interfaces/funcTreinamento.interface";
import { TreinamentoFuncionarioUseCase } from "../useCases/funcTreinamento.usecase";

export async function treinamentoFuncionarioRoutes(fastify: FastifyInstance) {
  const treinamentoFuncionarioUseCase = new TreinamentoFuncionarioUseCase();

  fastify.post<{ Body: TreinamentoFuncionarioCreate }>("/", async (req, reply) => {
    const { funcionarioId, treinamentoId, dataTreinamento } = req.body;
    try {
      const data = await treinamentoFuncionarioUseCase.create({
        funcionarioId,
        treinamentoId,
        dataTreinamento,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });

  fastify.get("/", async (req, reply) => {
    try {
      const treinamentosFuncionarios = await treinamentoFuncionarioUseCase.findAll();
      return reply.send(treinamentosFuncionarios);
    } catch (error) {
      reply.status(500).send({ error: "Erro ao obter treinamentos de funcionários." });
    }
  });
}