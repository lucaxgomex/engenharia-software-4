import { FastifyInstance } from "fastify";
import { DisciplinaUseCase } from "../usecases/disciplina.usecases";
import { DisciplinaCreate } from "../interfaces/disciplina.interface";

export async function professorRoutes(fastify: FastifyInstance) {
    const disciplinaUseCase = new DisciplinaUseCase();

    fastify.post<{Body: DisciplinaCreate}>('/', async (req, reply) => {
        const {name, email} = req.body;
        try {
            const data = await disciplinaUseCase.create({});
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    }); 
}