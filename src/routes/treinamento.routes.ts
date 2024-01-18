import { FastifyInstance } from "fastify";
import { TreinamentoCreate, TreinamentoUpdate } from "../interfaces/treinamento.interface";
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

    fastify.put<{ Params: { id: string }, Body: TreinamentoUpdate }>('/:id', async (req, reply) => {
        const { id } = req.params;
        const { nome, nr, validade } = req.body;
    
        try {
            const data = await treinamentoUseCase.update(id, { nome, nr, validade });
            if (data) {
                reply.send(data);
            } else {
                reply.status(404).send({ error: 'Treinamento não encontrado.' });
            }
        } catch (error: any) {
            reply.status(500).send({ error: `Erro ao atualizar treinamento: ${error.message}` });
        }
    });
}