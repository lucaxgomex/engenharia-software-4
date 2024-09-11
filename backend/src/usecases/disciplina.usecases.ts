import { DisciplinaCreate, DisciplinaRepository } from "../interfaces/disciplina.interface";
import { DisciplinaRepositoryPrisma } from "../repositories/disciplina.repository";

class DisciplinaUseCase {
    private disciplinaRepository: DisciplinaRepository;

    constructor() {
        this.disciplinaRepository = new DisciplinaRepositoryPrisma();
    }

    async create({name, professorId}: DisciplinaCreate) {}
}

export { DisciplinaUseCase };