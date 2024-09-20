import { Student } from "@prisma/client";
import { createStudentDTO } from "../implementation/createStudentDTO.interface";

export interface StudentRepository {
    create(student: createStudentDTO): Promise<Student>;
    findById(id: number): Promise<Student | null>;
    findAll(): Promise<Student[] | null>;
    update(id: number, student: createStudentDTO): Promise<Student | null>;
    delete(id: number): Promise<Student | null>;
}