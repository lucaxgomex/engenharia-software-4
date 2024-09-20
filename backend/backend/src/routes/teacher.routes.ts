import { FastifyInstance } from "fastify";
import { TeacherUsecase } from "../application/usecases/teacher.usecase";
import { createTeacherDTO } from "../domain/DTOs/createTeacherDTO.interface";

export async function teacherRoutes(fastify: FastifyInstance) {
    const teacherUsecase = new TeacherUsecase();
    
    fastify.post<{Body: createTeacherDTO}>('/', async (req, reply) => {
        const {name, email} = req.body
        console.log(req.body)
        try {
            const data = await teacherUsecase.create({
                name, 
                email
            });
            return reply.status(201).send(data);
        } catch (error) {
            return reply.send(error).status(500).send({ error: 'Erro ao cadastrar o professor.' })
        }
    })
    
    fastify.get('/test', async (req, reply) => {
        reply.send({
             hello: 'world',
        });
     })
    
    fastify.get('/', async (req, reply) => {
        try {
            const teachers = await teacherUsecase.findAll();
            return reply.status(200).send(teachers)
        } catch (error) {
            return reply.send(error)
        }
    })
    
    fastify.get<{Params: {id: number}}>('/:id', async (req, reply) => {
        const { id } = req.params;
        try {
            const teacher = await teacherUsecase.findById(Number(id));
            if (!teacher) {
                return reply.status(404).send({ error: 'Teacher not found' });
            }
            return reply.status(200).send(teacher)
        } catch (error) {
            return reply.send(error)
        }
    })

    fastify.put<{Params: {id: number}, Body: createTeacherDTO}>('/:id', async (req, reply) => {
        const {id} = req.params
        const {name, email} = req.body
        
        try {
            const teacher = await teacherUsecase.update(Number(id), {name, email})
            if(!teacher) {
                return reply.status(404).send({error: 'Teacher not found'})
            }

            return reply.status(200).send(teacher);
        } catch (error) {
            return reply.send(error)
        }
    })

    fastify.delete<{Params: {id: number}}>('/:id', async (req, reply) => {
        const {id} = req.params

        try {
            const teacher = await teacherUsecase.delete(Number(id))
            if(!teacher) {
                return reply.status(404).send({error: 'Teacher not found'})
            }

            return reply.status(204).send()
        } catch (error) {
            return reply.send(error)
        }
    })
}

