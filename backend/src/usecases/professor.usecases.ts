import { Professor, ProfessorCreate, ProfessorRepository } from "../interfaces/professor.interface";
import { ProfessorRepositoryPrisma } from "../repositories/professor.repository";

class ProfessorUseCase {
    private professorRepository: ProfessorRepository;

    constructor() {
        this.professorRepository = new ProfessorRepositoryPrisma();
    }

    async create({name, email}: ProfessorCreate): Promise<Professor> {
        const verifyIfProfessorExists = await this.professorRepository.findByEmail(email);
        if (verifyIfProfessorExists) {
            throw new Error('User alreay exists');
        }

        const result = await this.professorRepository.create({
            email, 
            name
        });

        return result;
    } 
}   

export { ProfessorUseCase };