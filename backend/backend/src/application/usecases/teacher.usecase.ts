import { Teacher } from "@prisma/client";
import { TeacherRepository, TeacherRepositoryPrisma } from "../../domain/repositories/teacher.repository";
import { createTeacherDTO } from "../../domain/DTOs/createTeacherDTO.interface";

class TeacherUsecase {
    private teacherRepository: TeacherRepository

    constructor() {
        this.teacherRepository = new TeacherRepositoryPrisma();
    }

    async create(createTeacherDTO: createTeacherDTO): Promise<Teacher> {
        const teacher = await this.teacherRepository.create(createTeacherDTO);

        return teacher
    }

    async findById(id: number): Promise<Teacher | null> {
        return await this.teacherRepository.findById(id);
    }

    async findAll(): Promise<Teacher[] | null> {
        return await this.teacherRepository.findAll()
    }

    async update(id: number, createTeacherDTO: createTeacherDTO): Promise<Teacher | null> {
        return this.teacherRepository.update(id, createTeacherDTO);
    }

    async delete(id: number): Promise<Teacher | null> {
        return this.teacherRepository.delete(id);
    }
}

export{TeacherUsecase}