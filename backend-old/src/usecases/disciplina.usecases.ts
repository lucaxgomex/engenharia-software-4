import { DisciplinaCreate, DisciplinaRepository } from "../interfaces/disciplina.interface";
import { DisciplinaRepositoryPrisma } from "../repositories/disciplina.repository";
import { ProfessorRepositoryPrisma } from "../repositories/professor.repository";
import { ProfessorRepository } from "../interfaces/professor.interface";

class DisciplinaUseCase {
    private disciplinaRepository: DisciplinaRepository;
    private professorRepository: ProfessorRepository;

    constructor() {
        this.disciplinaRepository = new DisciplinaRepositoryPrisma();
        this.professorRepository = new ProfessorRepositoryPrisma();
    }

    async create({name, professorId}: DisciplinaCreate) {
        const professor = await this.professorRepository.findByEmail(name);

        if (!professor) {
            throw new Error('User not found');
        }

        
    }
}

export { DisciplinaUseCase };