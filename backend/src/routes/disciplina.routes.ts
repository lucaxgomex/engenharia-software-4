import { FastifyInstance } from "fastify";
import { ProfessorUseCase } from "../usecases/professor.usecases";
import { ProfessorCreate } from "../interfaces/professor.interface";

export async function disciplinaRoutes(fastify: FastifyInstance) {
    const professorUseCase = new ProfessorUseCase();

    // route #1
    fastify.post<{Body: ProfessorCreate}>('/', async (req, reply) => {
        const {name, email} = req.body;
        try {
            const data = await professorUseCase.create({
                name,
                email
            });
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    }); 
    
    // route #2
    fastify.get('/', (req, reply) => {
        reply.send({
            hello: 'world'
        });
    }); 
}