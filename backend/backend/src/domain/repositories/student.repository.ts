import { Student } from "@prisma/client";
import { createStudentDTO } from "../DTOs/createStudentDTO.interface";
import { prisma } from "../../infra/database/prisma-client";

export interface StudentRepository {
    create(student: createStudentDTO): Promise<Student>
    findById(id: number): Promise<Student | null>
    findAll(): Promise<Student[] | null>
    update(id: number, student: createStudentDTO): Promise<Student | null> 
    delete(id: number): Promise<Student | null>
}

export class StudentRepositoryPrisma implements StudentRepository {
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