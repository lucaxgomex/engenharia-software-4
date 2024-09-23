import { Teacher } from "@prisma/client";
import { prisma } from "../../database/prisma-client";
import { createTeacherDTO } from "../../domain/implementation/createTeacherDTO.interface";
import { TeacherRepository } from "../../domain/repository/teacher.repository";

class TeacherServices implements TeacherRepository {

    async findById(id: number): Promise<Teacher | null> {
        const result = await prisma.teacher.findUnique({
            where: { id }
          });

        if(!result) {
            return null;
        }

        return result;
    }
    
    async create(teacher: createTeacherDTO): Promise<Teacher> {
        const result = await prisma.teacher.create({
            data: {
                email: teacher.email,
                name: teacher.name
            }
        });

        return result;
    }

    async findAll(): Promise<Teacher[] | null> {
        return await prisma.teacher.findMany();
    }

    async update(id: number, teacher: createTeacherDTO): Promise<Teacher | null> {
        return prisma.teacher.update({
            where: { id },
            data: {
                name: teacher.name,
                email: teacher.email
            }
        }).catch(() => null);
    }

    async delete(id: number): Promise<Teacher | null> {
        return prisma.teacher.delete({
            where: { id }
        }).catch(() => null); 
    }

}

export { TeacherServices };