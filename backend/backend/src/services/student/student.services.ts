import { prisma } from "../../infra/database/prisma-client";
import { Student } from "@prisma/client";
import { StudentRepository } from "../../domain/repository/student.repository";
import { createStudentDTO } from "../../domain/DTOs/createStudentDTO.interface";

class StudentServices implements StudentRepository {
    async create(student: createStudentDTO): Promise<Student> {
        const result = await prisma.student.create({
            data: {
                email: student.email,
                name: student.name
            }
        })

        return result;
    }

    async findById(id: number): Promise<Student | null> {
        const result = await prisma.student.findUnique({
            where: { id }
        });

        if (!result) {
            return null;
        }

        return result;
    }

    async findAll(): Promise<Student[] | null> {
        return await prisma.student.findMany()
    }

    async update(id: number, student: createStudentDTO): Promise<Student | null> {
        return prisma.student.update({
            where: { id },
            data: {
                name: student.name,
                email: student.email
            }
        }).catch(() => null);
    }

    async delete(id: number): Promise<Student | null> {
        return prisma.student.delete({
            where: { id }
        }).catch(() => null); 
    }
}

export { StudentServices };