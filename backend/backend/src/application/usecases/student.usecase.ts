import { createStudentDTO } from "../../domain/DTOs/createStudentDTO.interface";
import { Student } from "../../domain/entities/student.interface";
import { StudentRepository, StudentRepositoryPrisma } from "../../domain/repositories/student.repository";

class StudentUsecase {
    private studentRepository: StudentRepository

    constructor() {
        this.studentRepository = new StudentRepositoryPrisma();
    }

    async create(createStudentDTO: createStudentDTO): Promise<Student> {
        const student = await this.studentRepository.create(createStudentDTO);

        return student
    }

    async findById(id: number): Promise<Student | null> {
        const student = await this.studentRepository.findById(id);

        if (!student) {
            throw new Error("Student not found");
        }

        return student;
    }

    async findAll(): Promise<Student[] | null> {
        return await this.studentRepository.findAll()
    }

    async update(id: number, createStudentDTO: createStudentDTO): Promise<Student | null> {
        return this.studentRepository.update(id, createStudentDTO);
    }

    async delete(id: number): Promise<Student | null> {
        return this.studentRepository.delete(id);
    }
}

export{StudentUsecase}