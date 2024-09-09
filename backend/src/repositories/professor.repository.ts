import { Professor, ProfessorCreate, ProfessorRepository } from "../interfaces/professor.interface";

class ProfessorRepositoryPrisma implements ProfessorRepository {
    async create(data: ProfessorCreate): Promise<Professor> {}
}

export { ProfessorRepositoryPrisma };