import { FastifyInstance } from "fastify";
import { DisciplinaCreate } from "../interfaces/disciplina.interface";
import { DisciplinaUseCase } from "../usecases/disciplina.usecases";
import { authMiddleware } from "../middlewares/auth.middleware";

export async function disciplinaRoutes(fastify: FastifyInstance) {
    const disciplinaUseCase = new DisciplinaUseCase();

    fastify.addHook('preHandler', authMiddleware);

    // route #1
    fastify.post<{Body: DisciplinaCreate}>('/', async (req, reply) => {
        const {name} = req.body;
        
        try {
            const data = await disciplinaUseCase.create({});
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    }); 
}