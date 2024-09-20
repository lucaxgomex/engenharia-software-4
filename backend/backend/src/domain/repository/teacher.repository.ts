import { Teacher } from "@prisma/client";
import { createTeacherDTO } from "../implementation/createTeacherDTO.interface";

interface TeacherRepository {
    create(teacher: createTeacherDTO): Promise<Teacher>;
    findById(id: number): Promise<Teacher | null>;
    findAll(): Promise<Teacher[] | null>;
    update(id: number, teacher: createTeacherDTO): Promise<Teacher | null>;
    delete(id: number): Promise<Teacher | null>;
}

export { TeacherRepository };