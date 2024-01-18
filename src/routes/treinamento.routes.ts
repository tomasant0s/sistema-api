import { FastifyInstance } from "fastify";
import { TreinamentoCreate } from "../interfaces/treinamento.interface";
import { TreinamentoUseCase } from "../useCases/treinamento.usecase";

export async function treinamentoRoutes(fastify: FastifyInstance){

    const treinamentoUseCase = new TreinamentoUseCase()

    fastify.post<{ Body: TreinamentoCreate}>('/', async (req, reply) => {
        const { nome, nr, validade} = req.body
        try {
            const data = await treinamentoUseCase.create({
                nome,
                nr,
                validade,
            })
            return reply.send(data)
        } catch (error) {
            reply.send(error)
        }
    })
    fastify.get('/', async (req, reply) => {
        try {
            const treinamentos = await treinamentoUseCase.findAll();
            return reply.send(treinamentos);
        } catch (error) {
            reply.status(500).send({ error: 'Erro ao obter treinamentos.' });
        }
    });
}