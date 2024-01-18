import { FastifyInstance } from "fastify";
import { FuncionarioCreate } from "../interfaces/funcionario.interface";
import { FuncionarioUseCase } from "../useCases/funcionario.usecase";

export async function funcionarioRoutes(fastify: FastifyInstance) {
    const funcionarioUseCase = new FuncionarioUseCase();

    fastify.post<{ Body: FuncionarioCreate }>('/', async (req, reply) => {
        const { nome, matricula } = req.body;

        try {
            const data = await funcionarioUseCase.create({
                nome,
                matricula,
            });
            reply.send(data);
        } catch (error: any) {
            reply.status(500).send({ error: `Erro ao criar funcionário: ${error.message}` });
        }
    });

    fastify.get('/', async (req, reply) => {
        try {
            const funcionarios = await funcionarioUseCase.findAll();
            reply.send(funcionarios);
        } catch (error) {
            reply.status(500).send({ error: 'Erro ao obter funcionários.' });
        }
    });
}
