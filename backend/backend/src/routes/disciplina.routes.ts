import { FastifyInstance } from "fastify";
import { prisma } from "../database/prisma-client";

export async function disciplinaRoutes(fastify: FastifyInstance) {
    fastify.get('/', async(request, reply)=> {

        const disciplinasFound = await prisma.subject.findMany();

        if (disciplinasFound) {
            reply.code(200).send(disciplinasFound);
        }
        reply.code(404).send({
            erro: 404, 
            message: 'Não existem disciplinas cadastradas'
        })
    })
}