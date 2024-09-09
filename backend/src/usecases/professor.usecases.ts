import { Professor } from "@prisma/client";
import { ProfessorCreate, ProfessorRepository } from "../interfaces/professor.interface";
import { ProfessorRepositoryPrisma } from "../repositories/professor.repository";

class ProfessorUseCase {
    private professorRepository: ProfessorRepository;

    constructor() {
        this.professorRepository = new ProfessorRepositoryPrisma();
    }

    async create({name, email}: ProfessorCreate): Promise<Professor> {} 
}