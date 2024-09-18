import { FastifyInstance } from "fastify";
import { StudentUsecase } from "../../application/usecases/student.usecase";
import { createStudentDTO } from "../../domain/DTOs/createStudentDTO.interface";

export async function studentRoutes(fastify: FastifyInstance) {
    const studentUsecase = new StudentUsecase();

    fastify.post<{ Body: createStudentDTO }>('/', async (req, reply) => {
        const { name, email } = req.body;

        try {
            const student = await studentUsecase.create({ name, email });
            return reply.status(201).send(student);
        } catch (error) {
            reply.send(error)
        }
    });

    fastify.get<{ Params: { id: number } }>('/:id', async (req, reply) => {
        const { id } = req.params;

        try {
            const student = await studentUsecase.findById(Number(id));
            if (!student) {
                return reply.status(404).send({ error: 'Student not found' });
            }
            return reply.status(200).send(student);
        } catch (error) {
            reply.send(error)
        }
    });

    fastify.get('/', async (req, reply) => {
        try {
            const students = await studentUsecase.findAll();
            return reply.status(200).send(students);
        } catch (error) {
            return reply.send(error)
        }
    });

    fastify.put<{ Params: { id: number }, Body: createStudentDTO }>('/:id', async (req, reply) => {
        const { id } = req.params;
        const { name, email } = req.body;

        try {
            const student = await studentUsecase.update(Number(id), { name, email });
            if (!student) {
                return reply.status(404).send({ error: 'Student not found' });
            }
            return reply.status(200).send(student);
        } catch (error) {
            return reply.send(error)
        }
    });

    fastify.delete<{ Params: { id: number } }>('/:id', async (req, reply) => {
        const { id } = req.params;

        try {
            const student = await studentUsecase.delete(Number(id));
            if (!student) {
                return reply.status(404).send({ error: 'Student not found' });
            }
            return reply.status(204).send();
        } catch (error) {
            return reply.send(error)
        }
    });
}