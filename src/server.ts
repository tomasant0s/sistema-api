import fastify, { FastifyInstance } from "fastify";
import { funcionarioRoutes } from "./routes/funcionario.routes";
import { treinamentoRoutes } from "./routes/treinamento.routes";
import { treinamentoFuncionarioRoutes } from "./routes/funcTreinamento.routes";

const app: FastifyInstance = fastify({ logger: true })

app.register(funcionarioRoutes, {
    prefix: '/funcionarios'
})

app.register(treinamentoRoutes, {
    prefix: '/treinamentos'
})

app.register(treinamentoFuncionarioRoutes, {
    prefix: '/treinamentos-funcionario'
})

app.listen(
    {
      port: 3333,
    },
    () => console.log('Server is running on port 3333')
  );
  