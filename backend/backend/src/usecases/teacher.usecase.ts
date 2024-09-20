import { Teacher } from "@prisma/client";
import { TeacherRepository } from "../domain/repository/teacher.repository";
import { TeacherServices } from "../services/teacher/teacher.services";
import { createTeacherDTO } from "../domain/implementation/createTeacherDTO.interface";

class TeacherUsecase {
    private teacherRepository: TeacherRepository;

    constructor() {
        this.teacherRepository = new TeacherServices();
    }

    async create(createTeacherDTO: createTeacherDTO): Promise<Teacher> {
        const teacher = await this.teacherRepository.create(createTeacherDTO);

        return teacher;
    }

    async findById(id: number): Promise<Teacher | null> {
        return await this.teacherRepository.findById(id);
    }

    async findAll(): Promise<Teacher[] | null> {
        return await this.teacherRepository.findAll();
    }

    async update(id: number, createTeacherDTO: createTeacherDTO): Promise<Teacher | null> {
        return this.teacherRepository.update(id, createTeacherDTO);
    }

    async delete(id: number): Promise<Teacher | null> {
        return this.teacherRepository.delete(id);
    }
}

export { TeacherUsecase };